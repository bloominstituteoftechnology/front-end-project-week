import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: "AIzaSyDoUmaL2sDHRdgO5BHwZt6gVU2wcw1hQEM",
  authDomain: "cruise-notes.firebaseapp.com",
  databaseURL: "https://cruise-notes.firebaseio.com",
  projectId: "cruise-notes",
  storageBucket: "cruise-notes.appspot.com",
  messagingSenderId: "43897345232"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;