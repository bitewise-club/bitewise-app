import React from 'react';
import {withRouter} from 'next/router';
import Ingredient from "../models/Ingredient";
import IngredientCollection from "../models/IngredientCollection";
import IngredientSelection from "../components/IngredientSelection";
import './index.module.css';
import '../static/default.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../components/api/firebaseConfig";

const IngredientSelectPage = withRouter(props => {
    /* Initialize Firebase App */
    try {
        firebase.initializeApp(firebaseConfig);
    } catch {
        // Do nothing
    }

    // Authenticate development administrator. TODO Delete this in production
    firebase.auth().signInWithEmailAndPassword('s.xifaras999@gmail.com', 'bitewiseisgonnawin').catch(function (error) {
        console.error("Error authenticating user", error);
    });

    console.log(props);
    return (
        <IngredientSelection
            ingredientCollection={new IngredientCollection(props.ingredients.map(raw => Ingredient.fromRawObject(raw)))}
        />
    )
});

IngredientSelectPage.getInitialProps = function (context) {
    const {ingredients} = context.query;

    let props = {ingredients: JSON.parse(decodeURIComponent(ingredients))};
    return props;
};

export default IngredientSelectPage;
