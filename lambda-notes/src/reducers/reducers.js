import { FETCHING, SUCCESS } from '../actions/actions'

const initState =  {
 notes: [{
  tags: [],
  title: '',
  body: ' '
 }],
 fetching: false,
 error: null,
}

export const reducer = (state = initState, action) => {
switch(action.type){
 case FETCHING: 
  return {...state, fetching: true}
  case SUCCESS:
  return Object.assign({}, state, {
   notes: action.payload 
  })
 default:
  return state
}
}