import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGl1l761wnHnptsjh3xddZva4hiN2ORq8",
  authDomain: "lambda-notes-jeremy-kepf.firebaseapp.com",
  databaseURL: "https://lambda-notes-jeremy-kepf.firebaseio.com",
  
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;