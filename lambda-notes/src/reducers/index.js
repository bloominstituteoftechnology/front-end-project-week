import { ADD_NOTE, VIEW_NOTE } from "../actions";
import notes from "../dummyNotes";

const initialState = {
  notes: [...notes],
};
console.log(initialState);
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload),
      };
    case VIEW_NOTE:
      return { ...state, current: action.payload };

    default:
      return state;
  }
};
