import {
  SUBMIT_NEW_NOTE,
  FETCH_SINGLE_NOTE
} from "../actions/action";

const initialState = {
  notes: [
    {
      title: "Note Title1",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.",
      id: 0
    },
    {
      title: "Note Title2",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.",
      id: 1
    },
    {
      title: "Note Title3",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.",
      id: 2
    },
    {
      title: "Note Title4",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English.",
      id: 3
    }
  ],
  singleNote: ""
};

export const notesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SUBMIT_NEW_NOTE:
      let newNote = state.notes.slice();
      newNote.push(action.payload);
      return Object.assign({}, state, {
        notes: newNote
      });
    case FETCH_SINGLE_NOTE:
      let singleNote = state.notes.slice();
      singleNote = singleNote.filter(note => {
        if (note.id === action.payload) {
          return note;
        }
      });
      return Object.assign({}, state, {
        singleNote: singleNote
      });
    default:
      return state;
  }
};
