import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyATWQDVg2TjKDnMjM9ObkbMTIwAyeC8br0",
  authDomain: "lambda-notes-45h13i.firebaseapp.com",
  databaseURL: "https://lambda-notes-45h13i.firebaseio.com",
  projectId: "lambda-notes-45h13i",
  storageBucket: "lambda-notes-45h13i.appspot.com",
  messagingSenderId: "733943388482"
};

var fire = firebase.initializeApp(config);

export default fire;
