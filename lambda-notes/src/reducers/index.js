import { SHOW_ALL_NOTES, ADD_NOTE } from "../actions";

const initialState = {
  notes: [
    {title: "test", content: "this is a test"},
    {title: "Xang", content: "Dont work too hard"}
    ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_ALL_NOTES:
      return {...state, notes: [...state.notes]}
    case ADD_NOTE:
      return {...state, notes: [...state.notes, action.payload]};
    default:
      return state;
  }
}