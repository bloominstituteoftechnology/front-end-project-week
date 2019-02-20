import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyABJfs3RkjHnTMYHl_lSlSQaLe8iZhHE0o",
  authDomain: "lambda-notes-6a67e.firebaseapp.com",
  databaseURL: "https://lambda-notes-6a67e.firebaseio.com",
  projectId: "lambda-notes-6a67e",
  storageBucket: "",
  messagingSenderId: "922564230331"
}

firebase.initializeApp(config)

const database = firebase.database()

export default database