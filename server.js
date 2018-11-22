const express = require('express');
const cors = require('cors');
const port = 5000;
// STRETCH add selectable data store local or heroku

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let notes = [
  {
    id: 0,
    tags:"",
    title: "Auto service",
    priority: 2,
    summary: "",  // ADD logic to copy first 146 characters to summary.  If content is > 146 characters copy to textBody.
    textBody: "Check prices for Service G at Autobahn motors, Mercedes-Benz Marin, MB Pleasanton",
    urlAddress: ``
  },
  {
    id: 1,
    tags:"",
    title: "Trickfish 4x8 bass Cabinet",
    priority: 3,
    summary:"(blank summary)",
    textBody: "The TF408 features impressive specifications making it a great stand-alone cabinet and an absolute game changer as a two-cabinet stack. Weight-saving measures were taken into account while not losing the main objective of a killer compact cabinet that would be at home on stprioritys of all sizes.  |  Custom Eminence 4 x 8” ferrite speakers | HF compression driver on 80° conical horn  | 1200 watts peak handling, 600 watts RMS  |  Custom crossover with peak protection and HF Attenuation  |  2 x NL3 Combo connectors, 2 x ¼” phone jacks  | Baltic Birch  | Dado and Rabbet Joint Construction  | 8 ohms  | Freq. Resp. 40Hz - 16kHz  |  Metal handles, metal corners, rubber feet  | 16 gauge steel grille  | 22 oz. sharkskin vinyl  | H 22.0 x W 19.0 x D 15.0  | Weight: Net 56Lbs  | Made in the USA",
    urlAddress: `https://www.trickfishamps.com/tf408`
  },
  {
    id: 2,
    tags:"",
    title: "New portable upright bass?",
    priority: 1,
    summary: "Eminence Bass: Finally, the Eminence Bass is the closest relative to a true upright bass to our hands and ears. It was the first EUB that really caught Bob's attention...",
    textBody: "Finally, the Eminence Bass is the closest relative to a true upright bass to our hands and ears. It was the first EUB that really caught Bob's attention, that he wanted to continue to play and enjoy -- it has the vibe, both literally and figuratively-- the vibrations of a truly acoustic instrument against the body, and the feel of a true double bass neck. It is constructed like a full size double bass, with a bass bar and sound post. It has a nicely crafted removable wooden bout to put the bass in the perfect playing position. And while the acoustic sound is not loud enough, unamplified, to perform with, it can be practiced without an amp, as the acoustic sound is quite pleasing but won't be transmitted throughout the house.",
    urlAddress: `https://www.gollihurmusic.com/product/3080-ELECTRIC_UPRIGHT_BASSES_WHICH_ONE_A_BUYER_S_GUIDE.html`

  },
  {
    id: 3,
    tags:"",
    title: "Try out the Ned Steinberg EUB models",
    priority: 3,
    summary: "A wonderfully smooth playing and sounding EUB (electric upright bass). Ned Steinberger is the master of ergonomics, as well as tonal flexibility. This NS CR4M model adds EMG magnetic pickups...",
    textBody: "A wonderfully smooth playing and sounding EUB (electric upright bass). Ned Steinberger is the master of ergonomics, as well as tonal flexibility. This NS CR4M model adds EMG magnetic pickups, for even more flexibility of tone beyond the Polar bridge pickups. A 3 position switch lets you choose the output of the two types of pickups, and you can also adjust each string's coil of the neodymium magnets for as punch as you desire, and to balance the output for your best tone. List Price: $3580 (Includes great heavy duty braced tripod stand and improved gig bag with pocket for the stand)",
    urlAddress: ``
  },
  {
    id: 4,
    tags:"",
    title: "New Storpriority Spaces",
    priority: 2,
    summary:"",
    textBody: "Chapman Storpriority, Concord.  |  Clutter.com ",
    urlAddress: ``
  },
  {
    id: 5,
    tags:"",
    title: "Errors Test - bad note ",
    priority: 2,
    summary:"Test: summary with empty textBody",
    textBody: "",
    urlAddress: ``
  }
];
server.get('/notes', (req, res) => {
  res.json(notes);
});
let noteId = null; // ? notes.length ?



server.post('/notes', (req, res) => {
  const { title, priority, textBody } = req.textBody;
  const newNote = { title, priority, textBody, id: noteId };
  if (!title || !priority || !textBody) {
    return sendUserError(
      'Ya gone did noteed! Name/Age/Height are all required to create a note in the note DB.',
      res
    );
  }
  const findNoteByName = note => {
    return note.title === title;
  };
  if (notes.find(findNoteByName)) {
    return sendUserError(
      `Ya gone did noteed! ${title} already exists in the note DB.`,
      res
    );
  }

  notes.push(newNote);
  noteId++;
  res.json(notes);
});



server.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, priority, textBody } = req.textBody;
  const findNoteById = note => {
    return note.id == id;
  };
  const foundNote = notes.find(findNoteById);
  if (!foundNote) {
    return sendUserError('No Note found by that ID', res);
  } else {
    if (title) foundNote.title = title;
    if (priority) foundNote.priority = priority;
    if (textBody) foundNote.textBody = textBody;
    res.json(notes);
  }
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const foundNote = notes.find(note => note.id == id);

  if (foundNote) {
    const NoteRemoved = { ...foundNote };
    notes = notes.filter(note => note.id != id);
    res.status(200).json(notes);
  } else {
    sendUserError('No note by that ID exists in the note DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
