export default function notesReducer(state = {smurfs: []}, action) {

  switch (action.type) {

    case "ADD_NOTE":
      return Object.assign({}, state, {languageLabel: action.payload});
    case "UPDATE_NOTE":
      return Object.assign({}, state, {languageLabel: action.payload});
    case "REMOVE_NOTE":
      return Object.assign({}, state, {languageLabel: action.payload});
    default:
      return state;
  }
}
