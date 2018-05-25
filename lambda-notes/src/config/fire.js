import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyASvOQFUZ_BRIB3s0N_ybdJgrvyX8kiP5k",
  authDomain: "lambdanotes-724b7.firebaseapp.com",
  databaseURL: "https://lambdanotes-724b7.firebaseio.com",
  projectId: "lambdanotes-724b7",
  storageBucket: "",
  messagingSenderId: "499752517992"
};

export const fire = firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");
export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();