import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ButtonBase, Divider, Fade, Grid, makeStyles, Typography} from '@material-ui/core';
import CameraPrompt from "../components/CameraPrompt";
import '../static/default.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "./index.module.css";

import IngredientsView from '../components/IngredientsView';
import IngredientSelection from '../components/IngredientSelection';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

import {BrowserRouter, Route} from 'react-router-dom'

/* FIREBASE CONFIG */
const firebaseConfig = {
    apiKey: "AIzaSyDL_Y5nqr8d3xzKlVn4aOU8gW3e0RHzBQ0",
    authDomain: "bitewise-app.firebaseapp.com",
    databaseURL: "https://bitewise-app.firebaseio.com",
    projectId: "bitewise-app",
    storageBucket: "bitewise-app.appspot.com",
    messagingSenderId: "1048226464109",
    appId: "1:1048226464109:web:bdcf69e5c180fc68"
};

/* Initialize Firebase App */
try {
    firebase.initializeApp(firebaseConfig);
} catch {
    // Do nothing
}

/* Authenticate development administrator. Delete this in production */
firebase.auth().signInWithEmailAndPassword('s.xifaras999@gmail.com', 'bitewiseisgonnawin').catch(function(error) {
    console.error("Error creating user", error);
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0096db",
        },
        secondary: {
            main: "#29c609",
        },
    },
    typography: {
        fontFamily: [
            'Avenir',
            'Arial',
        ].join(','),
    },
});

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

import MainPage from './main';
import IngredientSelectPage from "./ingredientselect";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cameraAccess: false,
        }
    }

    render() {
        return (<div style={{
            width: "100%",
            height: "900px", // Don't know correct number
            backgroundImage: "url(../static/backgroundCropped.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'

        }}>

            <MainPage app={firebase.app()} />;

        </div>);
    }
}

export default Index;
