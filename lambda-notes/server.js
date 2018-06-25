const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', function(req, res) {
    res.status(200).json({api: 'running'});
});

server.use('api/notes', notesController);

const port = process.env.PORT || 5001;
server.listen(port, () => {
    console.log(`\n===API running on http://localhost:${port} ===\n`);
});
