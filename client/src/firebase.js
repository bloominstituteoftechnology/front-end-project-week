import firebase from 'firebase/app';

var config = {
  apiKey: "AIzaSyAociPc-co7xRgFZiCE3r0Bx4prPDck9Bc",
  authDomain: "lambda-notes-93fbe.firebaseapp.com",
  databaseURL: "https://lambda-notes-93fbe.firebaseio.com",
  projectId: "lambda-notes-93fbe",
  storageBucket: "",
  messagingSenderId: "276798341469"
};
firebase.initializeApp(config);

export default firebase;