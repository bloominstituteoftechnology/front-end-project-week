const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get(),


app.use('/', express.static(path.join(__dirname, '/client/build')));


app.listen('8080', () => console.log(`Example app listening on port ${port}!`));
