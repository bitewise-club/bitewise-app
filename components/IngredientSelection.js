import React from 'react';
import {Grid, Paper, Checkbox, Card, Typography, makeStyles} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";
import IngredientCollection from "../models/IngredientCollection";
import Ingredient from "../models/Ingredient";

import priceProcess from "./api/priceProcess";
import PriceTotalView from "./PriceTotalView";


function IngredientSelection(props) {
    const [count, setCount] = React.useState(props.ingredientCollection.visibleSize());

    let styles = useStyles();

    let listener = { onUpdate: () => {} };

    let items = props.ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                    <IngredientCheckbox ingredient={ingredient} styles={styles}
                        onChange={(ingredient) => {
                            listener.onUpdate(ingredient);
                        }} />
                </span>);
        });

    return (
        <Grid container spacing={3} className={styles.grid}>
            {items}
            <Grid item xs={12} lg={6}>
                <button onClick={() => {
                    props.ingredientCollection.showMore();
                    setCount(props.ingredientCollection.visibleSize());
                }}>Show More</button>
            </Grid>
            {/*<Grid item xs={12}>
                <button onClick={() => {
                        console.log("Submit clicked");
                        priceProcess(props.ingredientCollection.getAllSelected())
                            .then(priceEstimates => {
                                console.log(priceEstimates);
                            });
                    }
                }>
                    Submit
                </button>
            </Grid>*/}
            <PriceTotalView ingredientsCollection={props.ingredientCollection} listener={listener} />
        </Grid>
    );
}

export default IngredientSelection;
