import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import '../static/default.css';

import Camera from '../components/camera.js';

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#0096db",
        },
        secondary:{
            main: "#29c609",
        },
    },
    typography:{
        fontFamily: [
            'Arial',
        ].join(','),
    },
});

class Index extends React.Component{

    host = process.env.API_HOST;

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Camera />
            </ThemeProvider>
        );
    }
}

export default Index;