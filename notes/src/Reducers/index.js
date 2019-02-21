import { 
  GET_FETCH, GET_SUCCESS, GET_FAILURE,
  ADD_FETCH, ADD_SUCCESS, ADD_FAILURE,
  DELETE_FETCH, DELETE_SUCCESS, DELETE_FAILURE,
  UPDATE_FETCH, UPDATE_SUCCESS, UPDATE_FAILURE,
 } from "../Actions";

const initialState = 
{
  notes: [],
  fetchingNotes: false,
  error: null,
  editNote: {}
}

const rootReducer = (state = initialState, action) => {
//GET
   switch (action.type) {
      case GET_FETCH:
          return {
              ...state,
              fetchingNotes: true
          }
      case GET_SUCCESS: 
          return {
              ...state,
              error: null,
              fetchingNotes: false,
              notes: action.payload
          }
      case GET_FAILURE:
          return {
              ...state,
              fetchingNotes:false,
              error: action.payload
          }

  //ADD
      case ADD_FETCH:
          return {
              ...state,
              fetchingNotes: true
          }
      case ADD_SUCCESS:
      console.log(action.payload) 
          return {
              ...state,
              error: null,
              fetchingNotes: false,
              notes: [ ...state.notes, { ...action.payload.obj, _id: action.payload.payload.success, __v: 0, tags: [] }, ]
          }
      case ADD_FAILURE:
          return {
              ...state,
              fetchingNotes:false,
              error: action.payload
          }

  //UPDATE
      case UPDATE_FETCH:
          return {
              ...state,
              fetchingNotes: true
          }
      case UPDATE_SUCCESS: 
          return {
              ...state,
              error: null,
              fetchingNotes: false,
              notes: state.notes.map(note => {
                  if(note._id === action.payload._id){
                      return action.payload;
                  }else{
                      return note; 
                  }

               })
          }
      case UPDATE_FAILURE:
          return {
              ...state,
              fetchingNotes:false,
              error: action.payload
          }

  //DELETE
      case DELETE_FETCH:
          return {
              ...state,
              fetchingNotes: true
          }
      case DELETE_SUCCESS:
      console.log(action.payload.success) 
          return {
              ...state,
              error: null,
              fetchingNotes: false,
              notes: state.notes.filter(note => 
                  !(note._id === action.payload._id)
              )
          }
      case DELETE_FAILURE:
          return {
              ...state,
              fetchingNotes:false,
              error: action.payload
          }

//Default State
       default:
          return state;
  }
}

export default rootReducer; 