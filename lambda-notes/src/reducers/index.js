import { ADD_NOTE, DELETE_NOTE} from '../actions'

const initialState = [
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
  },

]

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      
    case DELETE_NOTE:
    const newNotes = state.filter(note => {

      return note.id !== action.id
    });
    return state = newNotes;
    default:
      return state; 
  }
}

export default noteReducer;