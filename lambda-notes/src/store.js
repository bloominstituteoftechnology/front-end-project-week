import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

// reducers
// @todo

// const firebaseConfig = {
//   apiKey: "AIzaSyDbzxL5Zsn1404IwWTXsiKZ8O6GNP7h-qw",
//   authDomain: "lambda-notes-c4dd2.firebaseapp.com",
//   databaseURL: "https://lambda-notes-c4dd2.firebaseio.com",
//   projectId: "lambda-notes-c4dd2",
//   storageBucket: "lambda-notes-c4dd2.appspot.com",
//   messagingSenderId: "879359842368"
// };
const testing = 123;

// react redux firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore
// const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// inital state

const initialState = {};

// create store

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
