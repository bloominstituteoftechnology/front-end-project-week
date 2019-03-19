import React  from 'react';
// import Login from "./Login"
import firebase from "firebase"
import firebaseAuth from "./firebase.js"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
const fireApp = firebase.initializeApp(firebaseAuth)

const Authenticate = App =>
    class extends React.Component {

        state = {
            isSignedIn: false
        }
       

   uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => false
            }
        }
        componentDidMount = () => {

            firebase.auth().onAuthStateChanged(user => {
                this.setState({ isSignedIn: !!user })
                console.log("user", user)
            })
        }


        render() {
            // return <App />
            if (this.state.isSignedIn) return <App />;
            return  <StyledFirebaseAuth uiConfig = {this.uiConfig} firebaseAuth={fireApp.auth()} />;

        }
    };
export default Authenticate;
