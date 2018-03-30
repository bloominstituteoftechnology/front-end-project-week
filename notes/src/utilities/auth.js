import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCK1CBqHx-IE8bdYno2Wp358xpYCrHw-lw",
  authDomain: "lambda-notes-app.firebaseapp.com",
  databaseURL: "https://lambda-notes-app.firebaseio.com",
  projectId: "lambda-notes-app",
  storageBucket: "",
  messagingSenderId: "136691642106"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();

export const ref = firebase.database().ref();
export var database = firebase.database();

export function auth(email, pw) {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, pw)
    .then(resp => saveUser(resp));
}

export function logout() {
  return firebaseAuth.signOut();
}

export function login(email, pw) {
  return firebaseAuth
    .signInWithEmailAndPassword(email, pw)

    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

export function resetPassword(email) {
  return firebaseAuth.sendPasswordResetEmail(email);
}

export function saveUser(user) {
  ref.child(`users/${user.uid}/info`).set({ email: user.email, uid: user.uid });

  writeNote({
    title: "This Is a Note! Click Me!",
    note:
      "Welcome to Lambda Notes. You can edit, view, and delete these notes. ",
    tags: ["tag1", "tag2", "tag3"]
  }).then(() => user);
}

export function writeNote(note) {
  let userId = firebase.auth().currentUser.uid;
  let newNoteKey = ref.child("notes").push().key;
  let updates = {};
  return database
    .ref("users/" + userId + "/notes/" + newNoteKey)
    .set({ ...note, id: newNoteKey });
}
