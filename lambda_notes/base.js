import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA8wI_2iX5hYcQ38fuM_79BW4ZXlI6lav8",
  authDomain: "frontend-project-wk.firebaseapp.com",
  databaseURL: "https://frontend-project-wk.firebaseio.com",
  projectId: "frontend-project-wk",
  storageBucket: "frontend-project-wk.appspot.com",
  messagingSenderId: "690328231241"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };
// export default firebase;