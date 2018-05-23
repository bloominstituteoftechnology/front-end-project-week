//note is the array of note
//error holds any error message received
//appState powers our finite state machine
//editIndex tells the edit form which smurf we're editing
const initialState = {
  notes: [],
  appState: "list",
  viewId: null,
  newId: 4
};

//Many of these cases are redundant with one another in terms of what they do
//I wanted the actions to have separate names for the sake of the logger and dev tools.

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default noteReducer;
