import { ADD_NOTE, DELETE_NOTE } from "../actions";


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
        case DELETE_NOTE: 
        return {...state, notes: state.notes.filter(note => {
            return !(note.id === action.payload)
        })}
          default: 
          return state
      }
  }