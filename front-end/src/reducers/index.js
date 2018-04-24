import * as AT from "../actions/actionTypes";

const initialState = {
  notes: [
    {
      title: "Sample Title",
      content: "Sample content of this note",
      id: 0
    },
    {
      title: "Sample Text",
      content: "SO WOW MUCH COOL",
      id: 1
    }
  ]
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE_NOTE:
      return Object.assign({}, state, { notes: [...state.notes, action.payload] });
    default:
      return state;
  }
};

export default noteReducer;
