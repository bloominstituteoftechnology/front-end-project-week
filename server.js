const express = require("express"); 
const server = express();
const helmet = require("helmet");
const db = require("./db.js");


db.connectTo("lambdaNotes")
  .then(() => console.log("\n... API Connected to Database ...\n"))
  .catch(err => console.log("\n*** ERROR Connecting to Database ***\n", err));

server.use(helmet());
server.use(express.json());

const noteController = require("./notes/notesController.js");

server.use("/notes", noteController);

server.get("/", (req, res) => res.send("API Running..."));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
