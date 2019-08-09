
class Ingredient {
    constructor(name, confidence, price=undefined) {
        this.name = name;
        this.confidence = parseFloat(confidence);
        this.price = parseFloat(price);
        this.selected = false;
    }

    toggleSelect() {
        this.selected = !this.selected;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getConfidence() {
        return this.confidence;
    }

    setPrice(price) {
        this.price = price;
    }

    isSelected() {
        return this.selected;
    }

    toString() {

    }

    static fromRawObject(obj) {
        let ingredient = new Ingredient(obj.name, obj.confidence, obj.price);
        console.log(obj.selected);
        ingredient.selected = obj.selected;
        return ingredient;
    }
}

export default Ingredient;