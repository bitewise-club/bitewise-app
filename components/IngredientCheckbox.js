import React from 'react';
import {Card, Checkbox, Grid, Typography} from "@material-ui/core";

class IngredientCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
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
            <Grid item xs={12} lg={6} className={this.props.styles.grid}>
                <Card className={this.props.styles.card}>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        color="primary"
                        inputProps={{
                            'aria-label': 'secondary checkbox',
                        }}
                    />
                    <Typography paragraph className={this.props.styles.p}>
                        {this.props.ingredient.getName()}
                    </Typography>
                </Card>
            </Grid>
        );
    }
}

export default IngredientCheckbox;
