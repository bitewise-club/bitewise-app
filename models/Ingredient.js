
class Ingredient {
    constructor(name, confidence, price=undefined) {
        this.name = name;
        this.confidence = parseFloat(confidence);
        this.price = parseFloat(price);
        this.selected = false;
    }

    toggleSelect() {
        this.selected ^= true;
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

    toString() {

    }
}

export default Ingredient;