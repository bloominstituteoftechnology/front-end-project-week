import { FETCHING_NOTES, 
 NOTES_FETCHED, 
 FETCHING_NOTE, 
 NOTE_FETCHED, 
 ADDED, 
 ADDING, 
 EDITING, 
 EDITED, 
 DELETING, 
 DELETED, 
 ERROR } from '../actions'

const initState =  {
 notes: [],
 note: {
 },
 fetchingNotes: false,
 notesFetched: false,
 fetchingNote: false,
 noteFetched: false,
 adding: false,
 added: false,
 editing: false,
 edited: false,
 deleting: false,
 deleted: false,
 error: false,
 errorString: ''
}

export const reducer = (state = initState, action) => {
switch(action.type){
 case FETCHING_NOTES: 
  return Object.assign({}, state, {fetchingNotes: true, added: false, deleted: false,})
 case NOTES_FETCHED:
  return Object.assign({}, state, {fetchingNotes: false, notesFetched: true, notes: action.payload})
 case FETCHING_NOTE: 
 return Object.assign({}, state, {fetchingNote: true, edited: false})
 case NOTE_FETCHED:
  return Object.assign({}, state, {fetchingNote: false, noteFetched: true, note: action.payload}) 
 case ADDING:
  return Object.assign({}, state, {adding: true})
 case ADDED:
  return Object.assign({}, state, {adding: false, added: true})
 case EDITING:
  return Object.assign({}, state, {editing: true})
 case EDITED:
  return Object.assign({}, state, {editing: false, edited: true, note: action.payload})  
 case DELETING:
  return Object.assign({}, state, {deleting: true })
 case DELETED: 
  return Object.assign({}, state, {deleting: false, deleted: true})
 case ERROR:
  return Object.assign({}, state, {error: true, errorString: action.payload})
 default:
  return state
}
}
