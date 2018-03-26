// import { combineReducers } from "redux";

const initState = {
  notes: [
    { id: 0, title: "First Note", body: "This is the body of the 1 note" },
    { id: 2, title: "Second Note", body: "This is the body of the 2 note" },
    { id: 3, title: "Third Note", body: "This is the body of the 3 note" },
    { id: 4, title: "Fourth Note", body: "This is the body of the 4 note" },
    { id: 5, title: "Fifth Note", body: "This is the body of the 5 note" },
    { id: 6, title: "Sisth Note", body: "This is the body of the 6 note" },
    { id: 7, title: "Seventh Note", body: "This is the body of the 7 note" },
    { id: 8, title: "Eighth Note", body: "This is the body of the 8 note" },
    { id: 9, title: "Ninth Note", body: "This is the body of the 9 note" }
  ]
};

// export default combineReducers(notes);

export default (state = initState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};
