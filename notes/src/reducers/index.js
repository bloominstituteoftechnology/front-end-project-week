import {REMOVE,EDIT,ADD} from '../actions';

const defaultState = {
  notes:[]
}


function modifyNotes(state=[],action){
  switch(action.type){
    case ADD:
      return [
        ...state,{
          text:action.text,
          id:action.id,
          title:action.title
        }
      ];
    case EDIT:
      return state.map( (e,i)=>{
        if(i === action.id){
          return {
            text:action.text,
            id:action.id,
            title:action.title
          }
        }
        else{
          return e;
        }
      });
    case REMOVE:
     return state.filter( (e,i)=>{
       if(i === parseInt(action.id,10)){
         return false;
       }
       else{
         return true;
       }
     })
    default:
      return state;
  }
}
export default (state=defaultState,action) => {
  switch(action.type){
    case ADD:
    case EDIT:
    case REMOVE:
      return Object.assign({},state,{
        notes:modifyNotes(state.notes,action)
     });
    default:
      return state;
  }
}
