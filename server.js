const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let notes = [
  {
    id: 1,
    title: 'Note Title #1',
    contents: 'In tincidunt, lacus sed sagittis imperdiet, nulla risus aliquam nisl, vel cursus nulla lectus a felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer non arcu accumsan, dictum lorem in, bibendum mi. Aenean eget nisl vel magna viverra posuere id feugiat arcu. Aenean augue nisi, pulvinar at eleifend in, finibus vel enim. Morbi tristique et dui eget consectetur. Cras sit amet leo ut tortor tincidunt lacinia non vitae augue. Nulla quis risus vel lectus dictum varius at eget sem. Cras viverra, tellus vehicula pellentesque finibus, tortor sem tempor sapien, hendrerit efficitur neque magna ut turpis. Praesent nisl dui, consequat quis ligula sed, pellentesque pulvinar tortor. In in blandit velit. Nam nisi sapien, fermentum id sagittis in, pellentesque in ante. Cras tincidunt nunc nec est tincidunt, nec laoreet lectus hendrerit. Sed nec lectus vitae ipsum sodales iaculis non non risus.\nDonec eu turpis ut felis lacinia fermentum. Cras ac iaculis turpis. Nullam efficitur ligula neque, at tincidunt ante elementum vel. Phasellus pulvinar pulvinar rhoncus. Vivamus vitae ultrices urna, eu porttitor arcu. Aliquam aliquam tincidunt laoreet. Ut id odio leo. Etiam dignissim lacus quis tortor venenatis interdum. Cras a mattis eros, ut ultrices odio.'
  },
  {
    id: 2,
    title: 'Note Title #2',
    contents: 'Phasellus id orci dolor. Vestibulum eu mi vel arcu ultricies porttitor. In sed rutrum nunc. Fusce rhoncus felis ac quam mattis fermentum. Morbi erat sem, blandit at pellentesque ut, semper nec felis. Aenean sit amet posuere nisi, ac rutrum nisl. Pellentesque condimentum pretium nunc, vel mollis tortor porta id. Morbi orci justo, convallis sed nibh vulputate, egestas imperdiet ex. Praesent et elit id nulla elementum fermentum. Duis elementum convallis dui, sed fringilla nisi rutrum a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\nSed et dapibus nisi. Nullam ac molestie odio. Maecenas vulputate, eros in vestibulum porta, odio tellus imperdiet enim, non lobortis urna sapien non erat. Vivamus malesuada turpis quis lorem hendrerit, ut elementum odio aliquam. Pellentesque rhoncus, eros vel sagittis vehicula, diam purus elementum urna, nec rhoncus neque ipsum et eros. In hac habitasse platea dictumst. Mauris libero tortor, venenatis quis pulvinar id, faucibus sed nulla. Maecenas gravida sed nibh ut sollicitudin. Maecenas vitae scelerisque lectus, non dignissim mauris. Cras id gravida tellus. Nunc suscipit interdum justo sit amet aliquet.'
  },
  {
    id: 3,
    title: 'Note Title #3',
    contents: 'Morbi purus quam, dignissim vel lorem at, posuere posuere odio. In hac habitasse platea dictumst. Etiam vulputate elit sed feugiat semper. Pellentesque interdum ornare libero, in luctus magna lobortis a. Mauris urna lacus, tempus eget auctor at, consectetur ornare mauris. Pellentesque ligula nisl, tempus at metus ut, molestie fringilla ligula. Phasellus sodales hendrerit enim sit amet congue. Suspendisse elit arcu, dictum a auctor a, feugiat ut lacus. Integer finibus, mi non imperdiet consequat, lectus orci tincidunt nulla, vitae pulvinar dolor est in ante. Mauris gravida mauris a lorem blandit, quis ornare massa rhoncus. Quisque volutpat nulla sit amet enim sollicitudin accumsan.'
  },
  {
    id: 4,
    title: 'Note Title #4',
    contents: 'Mauris lorem est, tempus sed placerat eget, maximus quis nulla. Quisque luctus dolor quam, non convallis felis auctor sollicitudin. Ut non dui a turpis feugiat blandit ut dictum turpis. Nam pulvinar nulla in mauris fringilla sagittis. Ut at tristique velit, id eleifend mauris. Etiam non mauris commodo, elementum lacus sed, euismod sem. Integer commodo ultrices libero, vitae vehicula diam feugiat et. Aenean feugiat sit amet tortor nec feugiat.\nEtiam posuere ultrices lectus, sit amet malesuada nunc maximus venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sagittis ligula molestie fringilla volutpat. Nam sit amet augue elit. Curabitur ultrices ex tristique venenatis gravida. Integer vehicula cursus mauris eu viverra. Nam eu diam et tortor ornare facilisis. Etiam eget tristique felis.'
  },
  {
    id: 5,
    title: 'Note Title #5',
    contents: 'Donec gravida eros a massa dapibus, eget convallis mi fermentum. Etiam cursus rutrum arcu. Suspendisse fermentum metus sit amet gravida bibendum. Integer magna enim, tincidunt et finibus sed, rutrum et felis. Ut urna nisl, suscipit at pharetra in, dignissim id nunc. Pellentesque a porttitor ex, non mollis ex. Morbi risus leo, finibus id dolor dignissim, blandit sodales nunc. Aenean varius viverra sem vel dignissim. Vivamus auctor mauris quis metus sodales, in iaculis nisl dictum. Aenean vehicula faucibus lacus eget ornare. Nullam ultrices mi lorem, quis cursus neque molestie sed.'
  },
  {
    id: 6,
    title: 'Note Title #6',
    contents: 'Donec vitae mi lacus. Duis nunc felis, lacinia et leo sit amet, dapibus faucibus lacus. Suspendisse potenti. Donec tincidunt erat diam, in mattis ipsum fermentum eget. Nunc ultrices lacus eu metus lacinia, nec consectetur mauris semper. Praesent ac eleifend tortor. Nunc iaculis suscipit nibh ac faucibus. Pellentesque id dui quis arcu aliquam ultricies. Duis sed orci ac purus aliquam ultricies vitae quis odio. Suspendisse volutpat rutrum mauris.\nNullam quis varius metus. Donec sit amet tellus nec nunc tempus convallis a quis magna. In sodales semper lobortis. Fusce ac nunc odio. Ut nisl mauris, egestas ut tristique a, congue ut mauris. Nullam at laoreet urna. Mauris mattis sodales lectus. Nunc commodo justo non tortor iaculis faucibus. Nullam tempus tortor ex, non volutpat mi varius id. Nunc id congue enim. Praesent justo neque, suscipit quis dolor vitae, pellentesque varius leo. Nulla porta nunc non turpis vehicula ultrices. Vivamus a justo auctor, pellentesque sem quis, fermentum massa.'
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});

app.get('/notes/:id', (req, res) => {
  const { id } = req.params;
  const note = notes.find(note => note.id == id);

  if(note){
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: `The note with id ${id} does not exist.` });
  }
});

app.post('/notes', (req, res) => {
  const note = { id: getNewId(), ...req.body };
  notes = [...notes, note];
  res.status(201).json(notes);
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  let noteIndex = notes.findIndex(note => note.id == id);

  if (noteIndex >= 0) {
    notes[noteIndex] = { ...notes[noteIndex], ...req.body };
    res.status(200).json(notes);
  } else {
    res
      .status(404)
      .json({ message: `The note with id ${id} does not exist.` });
  }
});

app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(note => note.id != req.params.id);
  res.status(200).json(notes);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});