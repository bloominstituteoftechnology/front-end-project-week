import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
    apiKey: "AIzaSyC9GArQo09ELDhdx5ChO-FF2ENA0Xnx8ak",
    authDomain: "dromo-733c8.firebaseapp.com",
    databaseURL: "https://dromo-733c8.firebaseio.com",
    projectId: "dromo-733c8",
    storageBucket: "dromo-733c8.appspot.com",
    messagingSenderId: "195416214925"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;