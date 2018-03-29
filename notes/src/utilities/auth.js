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
const ref = firebase.database().ref();

export const firebaseAuth = firebase.auth();

export function auth(email, pw) {
  return firebaseAuth.createUserWithEmailAndPassword(email, pw).then(saveUser);
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
  return ref
    .child(`users/${user.uid}/info`)
    .set({ email: user.email, uid: user.uid })
    .then(() => user);
}
