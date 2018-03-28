var FirebaseServer = require('firebase-server');
 
new FirebaseServer(5555, 'localhost.firebaseio.test', {
    states: {
        CA: 'California',
        AL: 'Alabama',
        KY: 'Kentucky'
    }
});

var client = new Firebase('http://localhost:5000');
client.on('value', function(snap) {
    console.log('Got value: ', snap.val());
});