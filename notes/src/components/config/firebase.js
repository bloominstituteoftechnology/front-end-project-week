import * as firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyDVn72-cIi2NHo6rzLNawDZHMUoIKaxePo",
    authDomain: "test-63983.firebaseapp.com",
    databaseURL: "https://test-63983.firebaseio.com",
    projectId: "test-63983",
    storageBucket: "",
    messagingSenderId: "621969416979"
}

firebase.initializeApp(firebaseConfig)

const databaseRef = firebase.database().ref();

export const notesRef = databaseRef.child("notes");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
