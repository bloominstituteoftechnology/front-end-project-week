import{ GET_NOTE, GET_SUCCESS, GET_FAILURE,
    ADD_NOTE, ADD_SUCCESS, ADD_FAILURE,
     DEL_NOTE, DEL_SUCCESS, DEL_FAILURE,
     EDIT_NOTE, EDIT_SUCCESS, EDIT_FAILURE } from '../actions';
 
  const initialState = {
    fetchingNote: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    note: {
        tags: note.tags,
        title: note.title,
        textBody: note.textBody,
        id: note.id
    },
    errors: []
  }
 
  export default (state = initialState, action) => {
    switch(action.type) {
 //GET CASES
      case GET_NOTE:
         return Object.assign({}, state, {
           fetchingNote:true
         });
       case GET_SUCCESS:
         return Object.assign({}, state, {
           fetchingNote:false,
           note: action.payload
         });
       case GET_FAILURE:
         return Object.assign({}, state, {
           fetchingNote:false,
           errors: [...state.errors, action.error]
         });
   //ADD CASES
       case ADD_NOTE:
         return Object.assign({}, state, {
           addingNote: true
         });
       case ADD_SUCCESS:
         return Object.assign({}, state, {
           addingNote:false,
           note: action.payload
         });
       case ADD_FAILURE:
         return Object.assign({}, state, {
           addingNote: false,
           errors: [...state.errors, action.error]
         });
   //DEL CASES
       case DEL_NOTE:
         return Object.assign({}, state, {
           deletingNote: true
         });
       case DEL_SUCCESS:
         return Object.assign({}, state, {
           deletingNote: false,
           note: action.payload
         });
       case DEL_FAILURE:
         return Object.assign({}, state, {
           deletingNote: false,
           errors: [...state.errors, action.error]
         });
   //EDIT CASES
       case EDIT_NOTE:
         return Object.assign({}, state, {
           updatingNote: true
         });
       case EDIT_SUCCESS:
         return Object.assign({}, state, {
           updatingNote: false,
           note: action.payload
         })
       case EDIT_FAILURE:
         return Object.assign({}, state, {
           updatingNote: false,
           errors: [...state.errors, action.error]
         })
       //DEFAULT
       default:
         return state;      
    }
  }
 