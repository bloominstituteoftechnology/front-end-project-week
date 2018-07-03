import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database';

var config = {
    apiKey: "your API key",
    authDomain: "your auth domain   ",
    databaseURL: "your dbURL",
    projectId: "your projectID",
    storageBucket: "",
    messagingSenderId: "your ID"
}

const app = firebase.initializeApp(config)
console.log("app", app)
const db = database(app)
console.log("db", db)
export default Rebase.createClass(db)