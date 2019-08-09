import React from 'react';
import IngredientsView from "../components/IngredientsView";
import * as firebase from "./index";
import AppBar from '../components/AppBar';

const MainPage = props => {
    return (
        <div>
            <AppBar/>
            <IngredientsView app={props.app} />
        </div>
    );
};

export default MainPage;