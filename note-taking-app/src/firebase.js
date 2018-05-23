const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyCVAdbrsWUHiL3I2OEtMwd_k0JqllyfTpA",
    authDomain: "side-project-ed8d1.firebaseapp.com",
    databaseURL: "https://side-project-ed8d1.firebaseio.com",
    projectId: "side-project-ed8d1",
    storageBucket: "side-project-ed8d1.appspot.com",
    messagingSenderId: "1070748215220"
  };
var db = firebase.initializeApp(config);
export default db;