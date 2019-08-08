import Clarifai from 'clarifai';
async function imageProcess(imageURL)
{
    const app = new Clarifai.App({
        apiKey: '36fc5d17e92e400ba1200a877dd3cdc0'
    });
    let ingredients = [];
    //set threshold level
    let threshold = .9;

    // TODO: Error handle
    let response = await app.models.predict(Clarifai.FOOD_MODEL, imageURL);

    if(response.rawData.outputs[0].data.hasOwnProperty("concepts"))
    {
        let lst_componentsInfo = response.rawData.outputs[0].data.concepts;
        for (let dct_componentInfo of lst_componentsInfo)
        {
            let s_name = dct_componentInfo["name"];
            let s_value = dct_componentInfo["value"];
            let s_id = dct_componentInfo["id"];

            //use id to see if component is recipe or ingredient?
            if (parseFloat(s_value) > threshold)
            {
                ingredients.push(s_name);
            }
        }
    }
    return ingredients;
}

export default imageProcess;