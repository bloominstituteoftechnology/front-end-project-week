import firebase from 'firebase';
import moment from 'moment';


let timestamp = moment().unix();

let month = moment().format('MMM');
let day = moment().format('Qo');
let year = moment().format('YYYY');


console.log(`${month} ${day} ${year}`);  




// Initialize Firebase
try {
var config = {
apiKey: "AIzaSyB-U_KfaeoJuMLXOsUcOn6N17_l_IdVf8k",
authDomain: "lambda-notes.firebaseapp.com",
databaseURL: "https://lambda-notes.firebaseio.com",
projectId: "lambda-notes",
storageBucket: "",
messagingSenderId: "105578906500"
};
firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;

// firebaseRef.set({
// 	appName: 'Lambda Notes',
// });

// firebaseRef.child('notes').push({
// 	title: 'One more Test title',
// 	content: 'One more Test note content'
// });

// setting firebase db
// firebaseRef.set({
// 	appName: 'Lambda Notes',
// 	isRunning: true,
// 	user: {
// 		name: 'Lo',
// 		age: 6
// 	}
// });


// // ** fetch whole database
// firebaseRef.once('value').then((snapshot)=>{
// 	console.log('snapshot', snapshot.val());
// }, ()=>{
// 	console.log('failed');
// });

// // ** fetch part of database
// firebaseRef.child('user').once('value').then((snapshot)=>{
// 	console.log('got data!', snapshot.val());
// }, ()=>{
// 	console.log('failed fetching');
// });

//** set child data
// firebaseRef.child('user').set({
// 	name: 'Mike',
// 	age: 28
// });

//** update nested property with path
// firebaseRef.update({
// 	isRunning: false,
// 	'user/name': 'Stew'
// });

//** update nested property with child method
// firebaseRef.child('user').update({
// 	age: 33
// });

//** remove data
//** setting property to null on update will remove it
// firebaseRef.child('user/age').remove();

//** set listener to changes in database
// firebaseRef.on('value', (snapshot)=>{
// 	console.log('got value from db', snapshot.val());
// });

//** turn off listener
// firebaseRef.off();

// firebaseRef.update({isRunning: false});

//** WORKING WITH ARRAYS

