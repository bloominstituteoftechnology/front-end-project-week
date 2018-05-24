import firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyAN5oWH9F9LeSGaRe4MenN9W5GhdIYxOTw",
    authDomain: "lambdanotes-sd.firebaseapp.com",
    databaseURL: "https://lambdanotes-sd.firebaseio.com",
    projectId: "lambdanotes-sd",
    storageBucket: "lambdanotes-sd.appspot.com",
    messagingSenderId: "25245661464"
  };
  firebase.initializeApp(config);

  export default firebase;