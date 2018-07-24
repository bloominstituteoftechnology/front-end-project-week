import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAARwp8UCCDlExtBWR6T0JTtlhCaoctBJc",
    authDomain: "lambda-edaf2.firebaseapp.com",
    databaseURL: "https://lambda-edaf2.firebaseio.com",
    projectId: "lambda-edaf2",
    storageBucket: "",
    messagingSenderId: "646963967017"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
