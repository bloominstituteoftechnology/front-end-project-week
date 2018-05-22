import React from 'react';
import firebase from "firebase/app";
import * as firebaseui from 'firebaseui';
import './firebaseStyle.css';

class FirebaseAuthentication extends React.Component {
    componentDidMount = () => {
        let uiConfig = {
            signInSuccessUrl: 'https://side-project-ed8d1.firebaseapp.com/',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: 'https://google.com'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        let ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    render() {
    return (
        <div id="firebaseui-auth-container">
        </div>
    )}
}

export default FirebaseAuthentication;