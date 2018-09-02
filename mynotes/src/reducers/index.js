import { DELETE_NOTE, EDIT_NOTE } from "../actions";

const initialState = [
  {
    _id: "asdklfjsodijflsdkf19",
    title: "First Note",
    body: "content info",
    createdat: 157234563211
  },
  {
    _id: "asdklfjsoyyeewrkwer56903",
    title: "Second Note",
    body: "content info",
    createdat: 157234563222
  },
  {
    _id: "zaqwsxcderfv0192749",
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
        if (item._id === action.payload) {
          temp.splice(index, 1);
          return;
        }
      });
      return temp;
    case EDIT_NOTE:
      state.forEach((item, index) => {
        if (item._id === action.payload._id) {
          temp.splice(index, 1);
          return;
        }
      });
      temp.push(action.payload);
      return temp;
    default:
      return state;
  }
};

export default notesReducer;
