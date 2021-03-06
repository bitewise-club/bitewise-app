import React from 'react';
import {Card, CardActions, CardContent, Fade, Grid, Typography} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';
import IngredientCheckbox from "./IngredientCheckbox";
import './fileupload.css';
import AppBar from "./AppBar";
import capitalize from "./util/capitalize";
import PriceTotalView from "./PriceTotalView";
import * as firebase from "firebase/app";
import "firebase/firestore";

function IngredientSelection(props) {
    const [count, setCount] = React.useState(props.ingredientCollection.visibleSize());
    const [loading, setLoading] = React.useState(true);
    const [updates, setUpdates] = React.useState(0);

    let db = firebase.app().firestore();

    let styles = useStyles();

    let listener = {
        onUpdate: () => {
        }
    };

    props.ingredientCollection
        .getUnderlyingArray().forEach(ingredient => {
        ingredient.setOnProductNameDefined((ingredient) => {
            // TODO: instead of doing a mutation here, add a setDisplayName function to ingredient
            ingredient.productName = ingredient.productName
                + (ingredient.getPrice() !== parseFloat('NaN')
                    ? ' ($' + (ingredient.getPrice() / 100).toString() + ')'
                    : '');
            setUpdates(updates + 1);
        });
    });

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
                                        {ingredient.hasProductName()
                                            ? ingredient.getProductName()
                                            : capitalize(ingredient.getName())}
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
            <Fade in={loading}>
                <div className="loader2" onLoad={timeoutLoad()}/>
            </Fade>
            <Grid container spacing={3} className={styles.grid} style={{marginTop: '25px'}} component="div">
                <div className="flexboxSelection">
                    {items}
                </div>
                <div className="showMore">
                    <Grid item xs={12} lg={6} component="div">
                        <button onClick={() => {
                            props.ingredientCollection.showMore();
                            setCount(props.ingredientCollection.visibleSize());
                        }}>Show More
                        </button>
                        <h1 className="totalCost">Total Cost: <PriceTotalView
                            ingredientsCollection={props.ingredientCollection} listener={listener}
                            loadingFunc={setLoading} db={db} /></h1>
                    </Grid>
                </div>
            </Grid>
        </div>
    );

    function timeoutLoad(){
        setTimeout(() => setLoading(false), 5000);
    }
}

export default IngredientSelection;
