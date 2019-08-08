import React from 'react';
import {Fade} from '@material-ui/core';

import FileUpload from './FileUpload';
import IngredientsList from './IngredientsList';

import imageProcess from './api/imageProcess';
import CloudUploader from './api/CloudStorage';
import priceProcess from "./api/priceProcess";

class IngredientsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileChosen: false,
            uploader: new CloudUploader(props.app),
            ingredients: []
        };

        this.getIngredients = this.getIngredients.bind(this);
    }

    async getIngredients(file) {
        this.setState((state, props) => {
            state.fileChosen = true;
            return state;
        });

        await this.state.uploader.storeFile(file, file.name)
            .then(() => console.log('upload completed'))
            .catch(error => {
            console.error(error);
            // TODO: Show the user this error if it occurs
        });

        await this.state.uploader.fetchDownloadUrl(file.name).then(url => {
            console.log(url);
            imageProcess(url).then(ingredients => {
                this.setState((state, props) => {
                    state.ingredients = ingredients;
                    return state;
                });
            });
        });
    }

    render() {
        return (<div>
            <Fade in={this.state.fileChosen}>
                <FileUpload onSubmit={this.getIngredients} />
            </Fade>
            {/* TODO: Add loading icon while ingredients are being fetched */}
            <Fade in={this.state.ingredients.length > 0}>
                <IngredientsList ingredients={this.state.ingredients} />
            </Fade>
        </div>);
    }
}

export default IngredientsView;