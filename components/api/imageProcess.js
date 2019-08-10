import Clarifai from 'clarifai';
import Ingredient from '../../models/Ingredient';
import IngredientCollection from '../../models/IngredientCollection';

async function imageProcess(imageURL) {
    const app = new Clarifai.App({
        apiKey: '36fc5d17e92e400ba1200a877dd3cdc0'
    });
    let ingredients = [];
    //set threshold level
    let threshold = .9;

    // TODO: Error handle
    let response = await app.models.predict(Clarifai.FOOD_MODEL, imageURL);

    if (response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
        let lst_componentsInfo = response.rawData.outputs[0].data.concepts;
        for (let dct_componentInfo of lst_componentsInfo) {
            ingredients.push(dct_componentInfo);
        }
    }

    return new IngredientCollection(ingredients.map(ingredient => new Ingredient(ingredient.name, ingredient.value)));
}

export default imageProcess;