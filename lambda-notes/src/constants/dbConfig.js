import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAUDKldV_QOhs1z0LcnZ9Fg8jxLG-tiON0",
  authDomain: "lambda-notes-30454.firebaseapp.com",
  databaseURL: "https://lambda-notes-30454.firebaseio.com",
  storageBucket: "lambda-notes-30454.appspot.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;