import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdBiQthHhHsXrgnmBFFlrVpDR1qkmtDCk",
  authDomain: "lambda-notes-140ef.firebaseapp.com",
  databaseURL: "https://lambda-notes-140ef.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export

export { firebaseApp };

// default eport

export default base;
