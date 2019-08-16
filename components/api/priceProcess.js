import axios from "axios";

const SPOON_KEY = "165f6350c7474b21b325d532a40c0980";
const SPOON_URL = "https://api.spoonacular.com/food/";

async function findFirstEntryWithPrice(ingredient, collectionRef) {
    let numProducts = ingredient["products"].length;
    let lastPrice = 0;
    let index = 0;
    let lastResponse = undefined;
    while (lastPrice === 0 && index < numProducts && index < 5) {
        let response = await axios.get(SPOON_URL + "products/" + ingredient["products"][index]["id"]
            + "?apiKey=" + SPOON_KEY);

        lastResponse = response;

        lastPrice = response.data["price"];

        if (collectionRef !== null) {
            collectionRef.doc(ingredient["products"][index]["id"].toString()).set(
                response.data
            );
        }

        index++;
    }

    if (lastResponse) {
        return lastResponse.data;
    } else {
        return Promise.resolve(undefined);
    }
}

async function priceProcess(ingredientList, db = null) {
    let ingredientListCopy = ingredientList.slice(0);

    // First, attempt to get price data from FireStore
    if (db !== null) {
        let toDelete = [];

        // We map over ingredientList instead of the copy to obtain a reference to the original ingredient objects
        let promises = ingredientList.map(async (ingredient, index) => {
            let doc = await db.collection("foods").doc(ingredient.getName()).get();
            if (doc.exists) {
                ingredient.setPrice(doc.data().price);
                ingredient.setProductName(doc.data().productName);
                toDelete.push(index);
                return true;
            }
            return false;
        });

        await Promise.all(promises);

        // toDelete **is** sorted, so iterate over it in reverse order and delete:
        for (let i = toDelete.length - 1; i >= 0; i--) {
            ingredientListCopy.splice(toDelete[i], 1);
        }
    }

    // Now that all cached entries have been acquired, get the rest
    let ingredientNames = ingredientListCopy.map(ingredient => ingredient.getName());

    let idResponse = (await axios.post(SPOON_URL + "ingredients/map?apiKey=" + SPOON_KEY, {
        "ingredients": ingredientNames,
        "servings": 1
    })).data;

    let idRequests = [];
    idResponse.forEach((ingredient, index) => {
        idRequests.push(
            findFirstEntryWithPrice(ingredient, db === null ? db : db.collection("foods")
                .doc(ingredientNames[index])
                .collection("products"))
        );
    });

    let responses = await Promise.all(idRequests);

    return ingredientListCopy.map((ingredient, index) => {
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