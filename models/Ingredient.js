class Ingredient {
    constructor(name, confidence, price = undefined) {
        this.name = name;
        this.confidence = parseFloat(confidence);
        this.price = parseFloat(price);
        this.selected = false;

        this.productImage = undefined;
        this.productName = undefined;
    }

    toggleSelect() {
        this.selected = !this.selected;
    }

    getName() {
        return this.name;
    }

    getProductName() {
        return this.productName;
    }

    hasProductName() {
        return this.productName !== undefined;
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

    setProductName(productName) {
        this.productName = productName;
        if (this.onProductNameDefined) {
            this.onProductNameDefined(this);
        }
    }

    updateWithProductInformation(productObject) {

    }

    setOnProductNameDefined(func) {
        this.onProductNameDefined = func;
    }

    toString() {

    }

    static fromRawObject(obj) {
        let ingredient = new Ingredient(obj.name, obj.confidence, obj.price);
        ingredient.selected = obj.selected;
        return ingredient;
    }
}

export default Ingredient;