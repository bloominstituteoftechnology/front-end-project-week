import { FETCHING, FETCHED, CREATING,
         UPDATING, DELETING, UPDATED, DELETED,
         CREATED, ERROR, CLOSE_MODAL,
         A_Z, Z_A, SORT_ID
       } from '../actions';


const initialState = {
  notes: [],
  fetching: false,
  fetched: false,
  creating: false,
  created: false,
  deleting: false,
  deleted: false,
  updating: false,
  updated: false,
  error: null,
  id: null
}


export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetching: true})

    case FETCHED:
      return Object.assign({}, state, {notes: action.payload || state.notes,
                                       fetched: true, fetching: false,
                                       deleted: false, created: false,
                                       updated: false})

    case CREATING:
      return Object.assign({}, state, {creating: true})

    case CREATED:
      return Object.assign({}, state, {created: true, creating: false,
                                       fetched: false})

    case DELETING:
      return Object.assign({}, state, {deleting: true, id: action.payload})

    case DELETED:
      return Object.assign({}, state, {deleted: true, deleting: false,
                                       fetched: false})

    case UPDATING:
      return Object.assign({}, state, {updating: true})

    case UPDATED:
      return Object.assign({}, state, {updated: true, updating: false,
                                       fetched: false})

    case ERROR:
        return Object.assign({}, state, {error: action.payload})

    case CLOSE_MODAL:
      return Object.assign({}, state, {deleting: false})
    case A_Z :
      return Object.assign({}, state, { notes: action.payload})
    case Z_A :
      return Object.assign({}, state, { notes: action.payload})
    case SORT_ID :
      return Object.assign({}, state, { notes: action.payload})
    default:
      return state;
  }
}
