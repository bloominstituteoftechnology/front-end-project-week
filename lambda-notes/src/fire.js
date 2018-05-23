
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAPO0s4JcgzjwORwUvEVgmzgF-3pIygStY",
  authDomain: "reactnotes-76790.firebaseapp.com",
  databaseURL: "https://reactnotes-76790.firebaseio.com",
  projectId: "reactnotes-76790",
  storageBucket: "reactnotes-76790.appspot.com",
  messagingSenderId: "278888176274"
};
const fire = firebase.initializeApp(config);

export { fire }