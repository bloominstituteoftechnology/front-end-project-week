import { DELETE_NOTE } from "../actions";

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
  switch (action.type) {
    case DELETE_NOTE:
      let temp = Array.from(state);
      state.forEach((item, index) => {
        if (item._id === action.payload) {
          temp.splice(index, 1);
          return;
        }
      });
      return temp;
    default:
      return state;
  }
};

export default notesReducer;
