import React from 'react';
import {Grid, Paper, Checkbox, Card, Typography, makeStyles} from '@material-ui/core';
import {useStyles} from './MaterialUIStyles';

function IngredientSelection(props) {
    const [shown, setShown] = React.useState(props.ingredientCollection.getShown());
    const [checked, setChecked] = React.useState(props.ingredientCollection.getSelectedBooleans());

    let styles = useStyles();

    console.log(props.ingredientCollection);

    let items = props
        .ingredientCollection
        .getShown()
        .map((ingredient, index) => {
            return (
                <span key={index}>
                <Grid item xs={12} lg={6} className={styles.grid}>
                <Card className={styles.card}>
                    <Checkbox
                        checked={checked[index]}
                        onChange={() => {
                            props.ingredientCollection.toggleSelect(index);
                            setChecked(props.ingredientCollection.getSelectedBooleans());
                        }}
                        color="primary"
                        inputProps={{
                            'aria-label': 'secondary checkbox',
                        }}
                    />
                    <Typography paragraph className={styles.p}>
                        {ingredient.getName()}
                    </Typography>
                </Card>
            </Grid>
            </span>);
        });

    return (
        <Grid container spacing={3} className={styles.grid}>
            {items}
        </Grid>
    );
}

export default IngredientSelection;