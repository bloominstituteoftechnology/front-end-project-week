import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAaYARmsT2uV91-P0RSFTibsp4l56F4cC0",
  authDomain: "lambda-front-end-8ae71.firebaseapp.com",
  databaseURL: "https://lambda-front-end-8ae71.firebaseio.com",
  projectId: "lambda-front-end-8ae71",
  storageBucket: "",
  messagingSenderId: "113865165710"
};

const devConfig = {
  apiKey: "AIzaSyAaYARmsT2uV91-P0RSFTibsp4l56F4cC0",
  authDomain: "lambda-front-end-8ae71.firebaseapp.com",
  databaseURL: "https://lambda-front-end-8ae71.firebaseio.com",
  projectId: "lambda-front-end-8ae71",
  storageBucket: "",
  messagingSenderId: "113865165710"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
