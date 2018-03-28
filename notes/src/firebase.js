import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDAReV6uAhiDSiMVOe69EgJTy-1AG4NsOA",
    authDomain: "lambda-notes-b2b43.firebaseapp.com",
    databaseURL: "https://lambda-notes-b2b43.firebaseio.com",
    projectId: "lambda-notes-b2b43",
    storageBucket: "lambda-notes-b2b43.appspot.com",
    messagingSenderId: "337557344869"
  };
var fire = firebase.initializeApp(config);
export default fire;