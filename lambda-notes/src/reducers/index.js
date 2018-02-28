import { ADD_NOTE } from "../actions";
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
        notes: [
          ...state.notes,
          {
            title: action.title,
            text: action.text,
            id: action.id,
          },
        ],
      };
    default:
      return state;
  }
};
