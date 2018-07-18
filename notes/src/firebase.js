import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDtQ5CefSYtm6pWPo6yemRCMYIMXFzNja0",
  authDomain: "lambda-notes-frontend.firebaseapp.com",
  databaseURL: "https://lambda-notes-frontend.firebaseio.com",
  projectId: "lambda-notes-frontend",
  storageBucket: "",
  messagingSenderId: "474204013733"
};
firebase.initializeApp(config);
export default firebase;