import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDmW0T1lLfjnoMx0TrxysbsXP2APIY3dZU",
  authDomain: "notes-app-1d2b4.firebaseapp.com",
  databaseURL: "https://notes-app-1d2b4.firebaseio.com",
  projectId: "notes-app-1d2b4",
  storageBucket: "notes-app-1d2b4.appspot.com",
  messagingSenderId: "490522382375"
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
