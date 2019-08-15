class IngredientCollection {
    constructor(ingredients, defaultThresh = 0.9) {
        this.ingredients = ingredients.sort((a, b) => {
            return b.getConfidence() - a.getConfidence();
        });

        this.threshold = defaultThresh;

        // Toggle selection on initial ingredients
        for (let ingredient of this.ingredients) {
            //use id to see if component is recipe or ingredient?
            if (ingredient.getConfidence() > this.threshold) {
                ingredient.selected = true;
            }
        }

        let numberToShow = this.thresholded().length;
        this.numberToShow = numberToShow;
    }

    getSelectedBooleans() {
        return this.ingredients.map(ingredient => ingredient.isSelected());
    }

    getAllSelected() {
        let newIngredientsList = [];
        for (let ingredient of this.ingredients) {
            if (ingredient.selected) {
                newIngredientsList.push(ingredient)
            }
        }

        return newIngredientsList;
    }

    getShown() {
        return this.ingredients.slice(0, this.numberToShow);
    }

    toggleSelect(index) {
        this.ingredients[index].toggleSelect();
    }

    showMore() {
        this.numberToShow += 3;
    }

    size() {
        return this.ingredients.length;
    }

    visibleSize() {
        return this.numberToShow;
    }

    thresholded() {
        let out = [];
        for (let ingredient of this.ingredients) {
            //use id to see if component is recipe or ingredient?
            if (ingredient.getConfidence() > this.threshold) {
                out.push(ingredient);
            }
        }

        return out;
    }

    getUnderlyingArray() {
        return this.ingredients;
    }
}

export default IngredientCollection;