import React from 'react';
import {Grid, Paper, Checkbox, Card, Typography, makeStyles} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";

function IngredientSelection(props) {
    let styles = useStyles();

    let items = props
        .ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                    <IngredientCheckbox ingredient={ingredient} styles={styles} />
                </span>);
        });

    return (
        <Grid container spacing={3} xs={12} className={styles.grid}>
            {items}
        </Grid>
    );
}

export default IngredientSelection;
