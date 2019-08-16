import React from 'react';
import '../static/default.css';
import "./index.module.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import MainPage from './main';
import firebaseConfig from "../components/api/firebaseConfig";



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cameraAccess: false,
        }

        /* Initialize Firebase App */
        try {
            firebase.initializeApp(firebaseConfig);
        } catch {
            // Do nothing
        }

        /* Authenticate development administrator. Delete this in production */
        firebase.auth().signInWithEmailAndPassword('s.xifaras999@gmail.com', 'bitewiseisgonnawin').catch(function (error) {
            console.error("Error creating user", error);
        });
    }

    render() {
        return (<div style={{
            width: "100%",
            height: "900px",
            backgroundImage: "url(../static/backgroundCropped.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            <MainPage app={firebase.app()}/>;
        </div>);
    }
}

export default Index;