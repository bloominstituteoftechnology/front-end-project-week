import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAsEYhU8xPvmu1XJBZIZtRAkQG-Z1itV1Q",
  authDomain: "lambda-notes-e7f52.firebaseapp.com",
  databaseURL: "https://lambda-notes-e7f52.firebaseio.com",
  projectId: "lambda-notes-e7f52",
  storageBucket: "lambda-notes-e7f52.appspot.com",
  messagingSenderId: "203720938681"
};
firebase.initializeApp(config);
export default firebase;