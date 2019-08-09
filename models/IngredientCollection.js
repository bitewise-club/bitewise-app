
class IngredientCollection {
    constructor(ingredients, defaultThresh=0.9) {
        this.ingredients = ingredients.sort((a, b) => {
            return b.getConfidence() - a.getConfidence();
        });

        this.threshold = defaultThresh;

        // Toggle selection on initial ingredients
        for (let ingredient of this.ingredients) {
            //use id to see if component is recipe or ingredient?
            if (ingredient.getConfidence() > this.threshold) {
                ingredient.toggleSelect();
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
        for (let ingredient of this.ingredients)
        {
            if (ingredient.selected)
            {
                newIngredientsList.push(ingredient)
            }
        }

        return newIngredientsList;
    }

    getShown() {
        console.log(this.numberToShow);
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

    thresholded()
    {
        let out = [];
        for (let ingredient of this.ingredients) {
            //use id to see if component is recipe or ingredient?
            if (ingredient.getConfidence() > this.threshold) {
                out.push(ingredient);
            }
        }

        return out;
    }
}

export default IngredientCollection;