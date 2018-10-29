import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../actions";


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
        case EDIT_NOTE:
      const { id, ...res } = action.payload;
      return {
        ...state,
        notes: state.notes.map(note => {
          return note.id === id ? { ...note, ...res } : note;
        })
      };
          default: 
          return state
      }
  }