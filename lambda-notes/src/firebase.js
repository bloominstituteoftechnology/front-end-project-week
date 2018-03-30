import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCKSLRshyFJeLTjAakVuGYTZ85m0UZWT8Q",
  authDomain: "lambda-notes-e1236.firebaseapp.com",
  databaseURL: "https://lambda-notes-e1236.firebaseio.com",
  projectId: "lambda-notes-e1236",
  storageBucket: "",
  messagingSenderId: "39353141699"
};

firebase.initializeApp(config);
export default firebase;