// import { combineReducers } from "redux";
import { ADD_NEW_NOTE } from "../actions/newNote";
import { EDIT_NOTE } from "../actions/editNote";

const initState = {
  notes: [
    { id: 0, title: "First Note", body: "This is the body of the 1 note" },
    { id: 1, title: "Second Note", body: "This is the body of the 2 note" },
    { id: 2, title: "Third Note", body: "This is the body of the 3 note" },
    { id: 3, title: "Fourth Note", body: "This is the body of the 4 note" },
    { id: 4, title: "Fifth Note", body: "This is the body of the 5 note" },
    { id: 5, title: "Sixth Note", body: "This is the body of the 6 note" },
    { id: 6, title: "Seventh Note", body: "This is the body of the 7 note" },
    { id: 7, title: "Eighth Note", body: "This is the body of the 8 note" },
    { id: 8, title: "Ninth Note", body: "This is the body of the 9 note" }
  ]
};

// export default combineReducers(notes);

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const newNote = { ...action.payload, id: state.notes.length };
      const newArray = state.notes.push(newNote);
      return { ...state, newArray };
    case EDIT_NOTE:
      let notes = state.notes.filter(item => item.id !== action.payload.id);
      notes.unshift(action.payload);
      return { ...state, notes };
    default:
      return state;
  }
};
