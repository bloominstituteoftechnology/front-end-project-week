import * as actions from "../actions";
const initialState = {
  notes: []
  //   authed: false
};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.note, id: action.id }]
      };
    case actions.EDIT_NOTE:
      let new_note = state.notes.slice();
      new_note.filter(note => note.id !== action.id).push(action.note);
      return {
        ...state,
        notes: new_note
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.slice().filter(note => note.id !== action.id)
      };
    case actions.GET_NOTES:
      return {
        ...state,
        notes: action.payload.data.map(note => {
          return {
            title: note.title,
            body: note.body,
            id: note._id
          };
        })
      };
    default:
      return state;
  }
}
