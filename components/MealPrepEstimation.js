import React from 'react';
import CloudUploader from "./api/CloudStorage";
class IngredientsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileChosen: false,
            uploader: new CloudUploader(props.app),
            ingredients: []
        };
    }
}
export default MealPrepEstimator;
