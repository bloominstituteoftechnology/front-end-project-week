import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJRrFJgW6vi6d3gxM91VsscFYOxG1Fh2c",
  authDomain: "lambdanotes-dev.firebaseapp.com",
  databaseURL: "https://lambdanotes-dev.firebaseio.com",
  projectId: "lambdanotes-dev",
  storageBucket: "lambdanotes-dev.appspot.com",
  messagingSenderId: "413526016061"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
