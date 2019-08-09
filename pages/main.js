import React from 'react';
import IngredientsView from "../components/IngredientsView";
import * as firebase from "./index";


const MainPage = props => {
    return (
        <div>
            <div class="banner">
                BiteWise
                <img class="logo" height={"50px"} align={"center"} src="../static/logo.png" />
            </div>
            <IngredientsView app={props.app} />


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

export default MainPage;