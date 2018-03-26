import {ADD,add} from '../actions';

const defaultState = {
  notes:[]
}


function modifyNotes(state=[],action){
  switch(action.type){
    case ADD:
      return [
        ...state,{
          text:action.text,
          id:action.id
        }
      ];
    default:
      return state;
  }
}
export default (state=defaultState,action) => {
  switch(action.type){
    case ADD:
      return Object.assign({},state,{
        notes:modifyNotes(state.notes,action)
      });
    default:
      return state;
  }
}
