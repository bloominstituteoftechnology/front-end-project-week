import { addNote, editNote, deleteNote } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah testing update',
      id: 0,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah this is note 1',
      id: 1,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah this is note 2',
      id: 2,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 3,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 4,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 5,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 6,
    },
    {
      title: 'Note Title',
      body: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis blah blah blah blah blah blah',
      id: 7,
    },
    {
      title: 'Super Long Note',
      body: 'This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note. This is a super long note.',
      id: 8,
    },
  ],
  nextid: 9
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'addNote':
      return { ...state, notes: [...state.notes, action.note], nextid: state.nextid + 1 };
    case 'editNote':
      return { ...state, notes: state.notes.map(obj => obj.id === action.note.id ? obj = action.note : obj) };
    case 'deleteNote':
      return { ...state, notes: state.notes.filter(obj => obj.id !== action.id).map((obj, i) => { obj.id = i; return obj; }), nextid: state.nextid - 1 };
    default:
      return state;
    }
};
