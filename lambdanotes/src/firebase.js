import firebase from 'firebase';
  
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYiPS24L4aBmZQjw-AosPVL2faPthNV5A",
  authDomain: "lambdanotes.firebaseapp.com",
  databaseURL: "https://lambdanotes.firebaseio.com",
  projectId: "lambdanotes",
  storageBucket: "lambdanotes.appspot.com",
  messagingSenderId: "185569790907"
};
firebase.initializeApp(config);

export default firebase;