import {initialState} from "../initialState";

export default function notesReducer(state = initialState, action) {

  switch (action.type) {

    case "SAVE_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.concat({
          title: action.payload.title,
          message: action.payload.message,
          id: state.id + 1
        }),
        id: state.id + 1
      });
    case "UPDATE_NOTE":
      return Object.assign({}, state, {languageLabel: action.payload});
    case "REMOVE_NOTE":
      return Object.assign({}, state, {languageLabel: action.payload});
    default:
      return state;
  }
}
