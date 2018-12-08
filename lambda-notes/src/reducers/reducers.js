import { FETCHING, SUCCESS, FAILURE, ADDED, ADDING, EDITING, EDITED, DELETING, DELETED } from '../actions'
const initState =  {
 notes: [{
  tags: [],
  title: '',
  body: ' '
 }],
 fetching: false,
 error: null,
 adding: null,
 creating: null,
 deleting: null,
 editing: null
}

export const reducer = (state = initState, action) => {
switch(action.type){
 case FETCHING: 
  return {...state, fetching: true}
 case SUCCESS:
  return Object.assign({}, state, {
   notes: [...action.payload], fetching: false
  })
 case ADDING:
  return {...state, adding: true}
 case ADDED:
  return Object.assign({}, state, {
   notes: action.payload, adding: false
  })
 case EDITING:
  return {...state, editing: true}
 case EDITED:
  return Object.assign({}, state, {notes: action.payload})  
 case DELETING:
  return {}
 case DELETED: 
  return {}
 case FAILURE:
  return {state, error: 'error!'}
 default:
  return state
}
}
