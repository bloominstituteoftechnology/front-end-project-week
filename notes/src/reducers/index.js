import { ADD_NOTE } from "../actions";


const initialState = {
    notes: [
      { title: "Redux Fundamentals", content: "dispatch stuff", id: "01" },
      {
        title: "Reducers and  Actions",
        content: "types and payloads and stuff",
        id: "02"
      }
    ]
  };

  export const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case ADD_NOTE:
        return { ...state, notes: [...state.notes, { ...action.payload }] };
          default: 
          return state
      }
  }