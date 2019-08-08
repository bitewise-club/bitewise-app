import $ from 'jQuery';
import axios from "axios";
async function priceProcess(ingredientList) {
    let spoonKey = "da70221b4bfd4192922aa75c3f306071";
    let data = {
        "ingredients": ingredientList,
        "servings": 1
    }
    // $.ajax({
    //     type: "POST",
    //     contentType: "application/json",
    //     url: "https://api.spoonacular.com/food/ingredients/map",
    //     data: JSON.stringify(data),
    //     dataType: "json",
    //     success: function(idResponse) {
    //         for (let ingredient of idResponse)
    //         {
    //             // let id = ingredient.products[0].id;
    //             // let name = ingredient.original;
    //             // let price = null;
    //             $.ajax({
    //                 type: "GET",
    //                 contentType: "application/json",
    //                 url: "https://api.spoonacular.com/food/products/" + ingredient["products"][0]["id"],
    //                 dataType: "json",
    //                 success: function(productResponse) {
    //                     //name and price into array
    //                     priceEstimates.push([ingredient["original"], productResponse["price"]]);
    //                 }
    //             });
    //         }
    //     }
    // });
    let idResponse = (await axios.post("https://api.spoonacular.com/food/ingredients/map?apiKey=" + spoonKey, {
        "ingredients": ingredientList,
        "servings": 1
    })).data;

    let idRequests = [];
    for (let ingredient of idResponse) {
        idRequests.push(
            axios.get("https://api.spoonacular.com/food/products/" + ingredient["products"][0]["id"]
                + "?apiKey=" + spoonKey)
        );
    }

    let productResponses = (await Promise.all(idRequests)).map(item => item.data);
    let prices = productResponses.map(productResponse => productResponse["price"]);
    let priceEstimates = prices.reduce((soFar, current, idx) => {
        soFar[ingredientList[idx]] = current
    }, {});

    return priceEstimates;
}
export default priceProcess;