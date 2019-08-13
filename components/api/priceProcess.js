import axios from "axios";

const SPOON_KEY = "dd6c0156e5e4464bb00fa1cac51ce954";
const SPOON_URL = "https://api.spoonacular.com/food/";

async function findFirstEntryWithPrice(ingredient) {
    let numProducts = ingredient["products"].length;
    let lastPrice = 0;
    let index = 0;
    let lastResponse = undefined;
    while (lastPrice === 0 && index < numProducts && index < 5) {
        let response = await axios.get(SPOON_URL + "products/" + ingredient["products"][index]["id"]
            + "?apiKey=" + SPOON_KEY);

        lastResponse = response;

        lastPrice = response.data["price"];

        index++;
    }

    if (lastResponse) {
        console.log(lastResponse.data);

        return lastResponse.data;
    } else {
        return Promise.resolve(undefined);
    }
}

async function priceProcess(ingredientList, db = null) {
    console.log(db);
    // First, attempt to get price data from FireStore
    if (db !== null) {
        let promises = ingredientList.map(async (ingredient, index) => {
            let doc = await db.collection("foods").doc(ingredient.getName()).get();
            if (doc.exists) {
                ingredient.setPrice(doc.data().price);
                ingredient.setProductName(doc.data().productName);
                ingredientList.splice(index, 1);
                return true;
            }
            return false;
        });

        await Promise.all(promises);
    }

    // Now that all cached entries have been acquired, get the rest
    let ingredientNames = ingredientList.map(ingredient => ingredient.getName());

    let idResponse = (await axios.post(SPOON_URL + "ingredients/map?apiKey=" + SPOON_KEY, {
        "ingredients": ingredientNames,
        "servings": 1
    })).data;

    let idRequests = [];
    for (let ingredient of idResponse) {
        idRequests.push(
            findFirstEntryWithPrice(ingredient)
        );
    }

    let responses = await Promise.all(idRequests);

    return ingredientList.map((ingredient, index) => {
        if (responses[index]) {
            // Create/update document in the database
            db.collection("foods").doc(ingredient.getName()).set({
                price: responses[index]["price"],
                productName: responses[index]["title"]
            });

            ingredient.setPrice(responses[index]["price"]);
            ingredient.setProductName(responses[index]["title"]);
            return ingredient;
        }
    });
}

export default priceProcess;