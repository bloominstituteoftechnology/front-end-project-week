import { ADD_NOTE, VIEW_NOTES, EDIT_NOTE, DELETE_NOTE } from '../actions';

const defaultState = {
  notes: []
}

const copy = (o) => {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_NOTE:
        return Object.assign({}, state, {notes: [...state.notes, action.payload]});
      case VIEW_NOTES:
        return Object.assign({}, state, { notes: action.payload });
      case EDIT_NOTE:
        let editNotes = copy(state.notes);
        editNotes.splice(
            action.payload.index, 1, action.payload.note
        );
        return Object.assign({}, state, {notes: editNotes})
      case DELETE_NOTE:
        let deleteNotes = copy(state.notes);
        deleteNotes.splice(action.payload.index, 1);
        return Object.assign({}, state, {notes: deleteNotes})
      default:
        return state
    }
}

export default reducer;