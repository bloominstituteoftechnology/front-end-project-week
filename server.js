const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 3;

function getNewId() {
  return nextId++;
}

let notess = [
  {
    id: 1,
    title: "Note 1",
    content:
      "wdhuaodwhwiaodhawoidhwaohdoawuhdoawu hddhawoudhawoudhawodhawouhduawwd"
  },
  {
    id: 2,
    title: "Note 1",
    content:
      "wdhuaodwhwiaodhawoidhwaohdoawuhdoawu hddhawoudhawoudhawodhawouhduawwd"
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get("/notes", (req, res) => {
  res.status(200).json(notess);
});

app.post("/notess", (req, res) => {
  const note = { id: getNewId(), ...req.body };
  notess = [...notess, note];
  res.status(201).json(notess);
});

app.put("/notess/:id", (req, res) => {
  const { id } = req.params;
  let noteIndex = notess.findIndex(note => note.id == id);

  if (noteIndex >= 0) {
    notess[noteIndex] = { ...notess[noteIndex], ...req.body };
    res.status(200).json(notess);
  } else {
    res
      .status(404)
      .json({ message: `The note with id ${id} does not exist.` });
  }
});

app.delete("/notess/:id", (req, res) => {
  notess = notess.filter(note => note.id != req.params.id);
  res.status(200).json(notess);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
