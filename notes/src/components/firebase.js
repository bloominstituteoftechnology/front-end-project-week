import fireBase from 'firebase';

const config = {
    piKey: "AIzaSyCaltGFXtJrlojAmAyB3mMXyuenzoSvmrE",
    authDomain: "lambda-notes-1b35f.firebaseapp.com",
    databaseURL: "https://lambda-notes-1b35f.firebaseio.com",
    projectId: "lambda-notes-1b35f",
    storageBucket: "lambda-notes-1b35f.appspot.com",
    messagingSenderId: "301736601427"
};
const app = fireBase.initializeApp(config);
const database = app.database();
let firebase = database.ref('notes');

export default firebase;