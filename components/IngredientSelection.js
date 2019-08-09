import React from 'react';
import {Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";


function IngredientSelection(props) {
    const [count, setCount] = React.useState(props.ingredientCollection.visibleSize());

    let styles = useStyles();
    console.log(props.ingredientCollection);
    let items = props.ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                    <Grid item xs={12} lg={6} component="div">
                        <Card className={styles.card}>
                          <CardContent>
                            <CardActions>
                                <IngredientCheckbox ingredient={ingredient} styles={styles}/>
                            </CardActions>
                            <Typography className={styles.title} color="textSecondary" gutterBottom>
                                {ingredient.getName()}
                            </Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                </span>);
        });

    return (
        <Grid container spacing={3} className={styles.grid} component="div">
            <span>
                {items}
            </span>
            <button onClick={() => {
                props.ingredientCollection.showMore();
                setCount(props.ingredientCollection.visibleSize());
            }}>Show More
            </button>
        </Grid>
    );
}

export default IngredientSelection;
