import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

// Database
const databaseRef = firebase.database().ref();
// export const notesRef = databaseRef.child("notes");
export const notesRef = (uid) => {
  return uid ?
    databaseRef.child(`/users/${uid}/notes`)
  :
    databaseRef.child("notes");
};

export const userRef = (uid) => {
  return databaseRef.child(`/users/${uid}/userpref`);
}

// Authorization
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();