import React from 'react';
import FileUpload from './FileUpload';
import IngredientCollection from '../models/IngredientCollection';
import imageProcess from './api/imageProcess';
import CloudUploader from './api/CloudStorage';
import '../static/default.css';

class IngredientsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileChosen: false,
            uploader: new CloudUploader(props.app),
            ingredients: new IngredientCollection([]),
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
            });

        await this.state.uploader.fetchDownloadUrl(file.name).then(url => {
            imageProcess(url).then(ingredients => {
                this.setState((state, props) => {
                    state.ingredients = ingredients;
                    return state;
                });
                window.location = '/ingredientselect?ingredients='
                    + encodeURIComponent(JSON.stringify(ingredients.getUnderlyingArray()));
            });
        });
    }

    render() {
        if (!this.state.fileChosen) {
            return (<div>
                <FileUpload onSubmit={this.getIngredients}/>
            </div>);
        } else {
            return (
                <span>
                    <FileUpload onSubmit={this.getIngredients}/>
                    <div className="loader"/>
                </span>
            );
        }
    }
}

export default IngredientsView;
