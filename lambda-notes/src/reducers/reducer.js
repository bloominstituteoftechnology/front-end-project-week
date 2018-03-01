import * as actionTypes from '../actions/actions';

const initialState = {
  notes: [{
      title: 'This is a tile',
      body: 'This is a body',
      id: 0,
  }],
  addingNote: false,
  currentNote: [],
  searchText: '',
  searching: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDNOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        addingNote: true,
      };
    case actionTypes.GETNOTE:
      return {
        ...state,
        currentNote: state.notes.filter(
          note => note.id === Number(action.payload)
        ),
        addingNote: false,
      };
    case actionTypes.DELETENOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== Number(action.payload)),
        currentNote: [],
      };
    case actionTypes.UPDATENOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id !== action.payload.id) {
            return note;
          }
          return {
              ...action.payload,
          };
        }),
        currentNote: [],
      };
      case actionTypes.SEARCH:
      return {
        ...state,
        filteredNotes: state.notes.filter(note => note.title.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 || note.body.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 ),
        searching: true,
      }
    default:
      return state;
  }
};
