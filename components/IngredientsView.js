import React from 'react';

import FileUpload from './FileUpload';

import IngredientCollection from '../models/IngredientCollection';

import imageProcess from './api/imageProcess';
import CloudUploader from './api/CloudStorage';

class IngredientsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileChosen: false,
            uploader: new CloudUploader(props.app),
            ingredients: new IngredientCollection([])
        };
        this.getIngredients = this.getIngredients.bind(this);
    }

    async getIngredients(file) {
        console.log('starting upload');

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

                // this.props.setFunc(ingredients);

                // redirect
                window.location = '/ingredientselect?ingredients='
                    + encodeURIComponent(JSON.stringify(ingredients.getUnderlyingArray())); // TODO: Add url params
            });
        });
    }

    render() {
        // return (<div>
        //     <FileUpload onSubmit={this.getIngredients} />
        //     {/* TODO: Add loading icon while ingredients are being fetched */}
        //     {/*<IngredientsList ingredients={this.state.ingredients} />*/}
        //     <IngredientSelection ingredientCollection={this.state.ingredients} />
        // </div>);

        if (!this.state.fileChosen) {
            return (<div>
                <FileUpload onSubmit={this.getIngredients}/>
            </div>);
        } else {
            return (
                <div>
                    <FileUpload onSubmit={this.getIngredients}/>
                    <div className="loader"></div>
                </div>
            );
        }
    }
}

export default IngredientsView;
