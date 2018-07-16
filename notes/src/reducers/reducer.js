import { SUBMIT_NEW_NOTE } from "../actions/action";

const initialState = {
  notes: [
    {
      title: "Note Title1",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English."
    },
    {
      title: "Note Title2",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English."
    },
    {
      title: "Note Title3",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English."
    },
    {
      title: "Note Title4",
      body:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English."
    }
  ]
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
    default:
      return state;
  }
};
