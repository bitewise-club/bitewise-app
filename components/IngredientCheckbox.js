import React from 'react';
import {Card, Checkbox, Grid, Typography} from "@material-ui/core";
import './fileupload.css';

class IngredientCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.ingredient.isSelected()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.ingredient.toggleSelect();
        this.setState((state, props) => {
            state.checked = props.ingredient.isSelected();
            return state;
        });
    }

    render() {
        return (
            <Grid item xs={12} lg={6} className={this.props.styles.grid} component="div">
                <div className="cardFix">
                    <Checkbox
                        checked={this.state.checked}
                        onChange={(e) => {
                            this.handleChange(e);
                            this.props.onChange(this.props.ingredient);
                        }}
                        color="primary"
                        inputProps={{
                            'aria-label': 'secondary checkbox',
                        }}
                    />
                </div>
            </Grid>
        );
    }
}

export default IngredientCheckbox;
