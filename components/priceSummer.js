function priceSummer(ingredientList)
{
    let summation = 0.0;
    for (let ingredient in ingredientList)
    {
        summation += ingredient.price;
    }
    return summation;
}
export default priceSummer;