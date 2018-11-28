import { FETCHING, SUCCESS, FAILURE } from '../actions/actions'

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
   notes: action.payload, fetching: false
  })
  case FAILURE:
  return {state, error: 'error!'}
 default:
  return state
}
}