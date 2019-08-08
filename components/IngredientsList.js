import React from 'react';

class IngredientsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ingredientsTags =
            this.props.ingredients.map(
                ingredient => <li>{ingredient}</li>
            );

        return (
            <ul>
                {ingredientsTags}
            </ul>
        );
    }
}

export default IngredientsList;