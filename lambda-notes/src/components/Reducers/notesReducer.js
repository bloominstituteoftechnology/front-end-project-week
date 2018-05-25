import {
  FETCH,
  LOGOUT,
} from '../Actions';

const initialState = {
  notes: [],
  loading: false,
  error: null,
}

export const notesReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case FETCH:
      let newState = [];
      for (let key in action.payload) {
        const { title, text, date, tags } = action.payload[key];
        console.log(tags);
        const tagArr = typeof tags === "string" ? tags.split(',').map(tag => tag.trim().toLowerCase()) : []; 
        newState.push({
          id: key,
          title: title,
          text: text,
          date: date,
          tags: tagArr,
        });
      }
      return {
        ...state,
        notes: newState,
      };
    case LOGOUT:
      return {
        ...state,
        notes: [],
      }
    default:
      return {
        ...state,
      };
  }
}