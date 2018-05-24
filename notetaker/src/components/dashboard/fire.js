import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBoKJY4sLv2C93iThVD6TIPuuHUvS-GR1Q",
    authDomain: "notetaker-7778c.firebaseapp.com",
    databaseURL: "https://notetaker-7778c.firebaseio.com",
    projectId: "notetaker-7778c",
    storageBucket: "notetaker-7778c.appspot.com",
    messagingSenderId: "834226486993"
  };
var fire = firebase.initializeApp(config);
export default fire;