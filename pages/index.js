import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import '../static/default.css';

import IngredientsView from '../components/IngredientsView';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

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
    palette:{
        primary:{
            main: "#0096db",
        },
        secondary:{
            main: "#29c609",
        },
    },
    typography:{
        fontFamily: [
            'Arial',
        ].join(','),
    },
});

class Index extends React.Component{

    host = process.env.API_HOST;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <IngredientsView app={firebase.app()} />
            </ThemeProvider>
        );
    }
}

export default Index;
