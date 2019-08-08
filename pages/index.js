import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ButtonBase, Divider, Grid, makeStyles, Typography} from '@material-ui/core';
import CameraPrompt from "../components/CameraPrompt";
import '../static/default.css';

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

class Index extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} alignContent="center">
                            <Typography variant="h1" align="center" gutterBottom>
                                BiteWise
                            </Typography>
                            <Divider/>
                            <CameraPrompt/>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        );
    }
}

export default Index;