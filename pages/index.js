import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ButtonBase, Divider, Fade, Grid, makeStyles, Typography} from '@material-ui/core';
import CameraPrompt from "../components/CameraPrompt";
import '../static/default.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "./index.module.css";

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
    constructor(props) {
        super(props);
        this.state = {
            cameraAccess: false,
        }
    }

    render() {
        return (
            <div style={{
                width: "100%",
                height: "900px", // Don't know correct number
                backgroundImage: "url(../static/backgroundCropped.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'

            }}>
                <div class="banner">
                    BiteWise
                    <img class = "logo" height={"40px"} align={"center"} src= "../static/logo.png"></img>
                </div>



                {/*<ThemeProvider theme={theme}>*/}
                {/*    <div>*/}
                {/*        <Container container spacing={3}>*/}
                {/*                <Typography variant="h1" align="center" gutterBottom>*/}
                {/*                    BiteWise*/}
                {/*                </Typography>*/}
                {/*                <Button variant="contained" color="primary">*/}
                {/*                    Hello World*/}
                {/*                </Button>*/}
                {/*                <CameraPrompt/>*/}
                {/*        </Container>*/}
                {/*    </div>*/}
                {/*</ThemeProvider>*/}
            </div>
        );
    }
}

export default Index;