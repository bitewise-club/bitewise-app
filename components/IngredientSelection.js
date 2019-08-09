import React from 'react';
import {Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";
import './fileupload.css';
import AppBar from "./AppBar";
import PriceTotalView from "./PriceTotalView";

function IngredientSelection(props) {
    const [count, setCount] = React.useState(props.ingredientCollection.visibleSize());

    let styles = useStyles();

    let listener = {
        onUpdate: () => {
        }
    };

    let items = props.ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                        <Card className={styles.card}>
                          <CardContent>
                            <CardActions>
                                <IngredientCheckbox ingredient={ingredient} styles={styles}
                                    onChange={(ingredient) => {
                                        listener.onUpdate(ingredient);
                                    }}/>
                                <Typography className={styles.title} color="textSecondary" gutterBottom>
                                    <div className="ingredientText">
                                        {ingredient.getName()}
                                    </div>
                                </Typography>
                            </CardActions>
                          </CardContent>
                        </Card>
                </span>);
        });

    return (
        <div>
            <AppBar/>
            <h1 className="ingredientHeader">Select your ingredients.</h1>
            <Grid container spacing={3} className={styles.grid}>
                <div className="flexboxSelection">
                    {items}
                </div>
                <div className="showMore">
                    <Grid item xs={12} lg={6}>
                        <button onClick={() => {
                            props.ingredientCollection.showMore();
                            setCount(props.ingredientCollection.visibleSize());
                        }}>Show More
                        </button>
                        <h1 className="totalCost">Total Cost: $21.48</h1>
                    </Grid>
                </div>

            </Grid>
            <PriceTotalView ingredientsCollection={props.ingredientCollection} listener={listener}/>
        </div>
    );
}

export default IngredientSelection;
