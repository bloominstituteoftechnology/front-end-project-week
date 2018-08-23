import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';


export const initialState = {
  notes: [
    {
      id: 'note-title',
      title: 'Note Title',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title1',
      title: 'Note Title1',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title2',
      title: 'Note Title2',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title3',
      title: 'Note Title3',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title4',
      title: 'Note Title4',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title5',
      title: 'Note Title5',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title6',
      title: 'Note Title6',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title7',
      title: 'Note Title7',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
    {
      id: 'note-title8',
      title: 'Note Title8',
      description: 'Morbi pellentesque esuismod vnenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur millis cha cha cha'
    },
  ]
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_NOTE:
      let newState = state.notes.filter(item => item.id !== action.payload)
    return Object.assign({}, state, { notes: newState });

    case EDIT_NOTE:
      let newwNotes = state.notes.slice();
      let regexonEdit = /([a-z0-9\s])/g;

      // id = url ready title
      let newId = action.payload.title
              .toLowerCase()
              .match(regexonEdit)
              .join('')
              .split(' ')
              .join('-');

      // filters by id
      newwNotes.forEach(item => {
        if (item.id === action.payload.id) {
          item.id = newId
          item.title = action.payload.title
          item.description = action.payload.description
        }
      })
    return Object.assign({}, state, { notes: newwNotes });

    case ADD_NOTE:
      let newNotes = state.notes.slice();
      let regex = /([a-z0-9\s])/g;

      // id = url ready title
      let id = action.payload.title
                .toLowerCase()
                .match(regex)
                .join('')
                .split(' ')
                .join('-');

      // Handle url doubles
      for (let i = 0; i < newNotes.length; i++) {
        if (newNotes[i].id === id) {
          id += Math.floor(Math.random() * (100000 - 200) + 200);
        }
      }

      let newNote = { ...action.payload, id: id };
      newNotes.push(newNote);

    return Object.assign({}, state, { notes: newNotes });

    default:
      return state;
  }
}
