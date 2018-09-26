import {
  DELETE_NOTE,
  EDIT_NOTE,
  CREATE_NOTE,
  FETCH_NOTE,
  FETCH_NOTE_ID
} from "../actions";

const initialState = [
  {
    id: "asdklfjsodijflsdkf19",
    title: "First Note",
    body: "content info",
    createdat: 157234563211
  },
  {
    id: "asdklfjsoyyeewrkwer56903",
    title: "Second Note",
    body: "content info",
    createdat: 157234563222
  },
  {
    id: "zaqwsxcderfv0192749",
    title: "Third Note",
    body: "content info",
    createdat: 157234563233
  }
];

const notesReducer = (state = initialState, action) => {
  let temp = Array.from(state);
  switch (action.type) {
    case DELETE_NOTE:
      state.forEach((item, index) => {
        if (item.id === action.payload) {
          temp.splice(index, 1);
          return;
        }
      });
      return temp;
    case EDIT_NOTE:
      state.forEach((item, index) => {
        if (item.id === action.payload._id) {
          temp.splice(index, 1);
          return;
        }
      });
      temp.push(action.payload);
      return temp;
    case CREATE_NOTE:
      temp.push(action.payload);
      return temp;
    case FETCH_NOTE_ID:
      return action.payload;
    case FETCH_NOTE:
      return action.payload;
    default:
      return state;
  }
};

export default notesReducer;
