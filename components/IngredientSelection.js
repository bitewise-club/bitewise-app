import React from 'react';
import {Grid, Paper, Checkbox, Card, Typography, makeStyles} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";
import IngredientCollection from "../models/IngredientCollection";
import Ingredient from "../models/Ingredient";


function IngredientSelection(props) {
    const [count, setCount] = React.useState(props.ingredientCollection.visibleSize());

    let styles = useStyles();
    console.log(props.ingredientCollection);
    let items = props.ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                    <IngredientCheckbox ingredient={ingredient} styles={styles} />
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
        </Grid>
    );
}

export default IngredientSelection;
