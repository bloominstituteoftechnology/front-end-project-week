/*
  Be sure to import in all of the action types from `../actions`
*/
import { ADD, EDIT, CANCEL, FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions/types';


const initialState = {
  notes: {},

  add: false,
  edit: false,


  fetching: false,
  fetched: false,

  saving: false,
  saved: false,

  updating: false,
  updated: false,

  deleting: false,
  deleted: false,

  error: null
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD:
        return Object.assign({}, state, {
            add: true,
        })
        case EDIT:
        return Object.assign({}, state, {
            edit: true,
        })
        case CANCEL:
        return Object.assign({}, state, {
            add: false,
            edit: false
        })
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: false,
            })
        case FETCHED:
            console.log("My data : ", action.payload);
            return Object.assign({}, state, {
                fetched: true,
                fetching: false,
                notes: action.payload,
            })
        case SAVING:
            return Object.assign({}, state, {
                saving: true,
                saved: false
            })
        case SAVED: 
            return Object.assign({}, state, {
                saving: false,
                saved: true,
                notes: action.payload
            })
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                updated: false
            })
        case UPDATED:
            return Object.assign({}, state, {
                updated: true,
                updating: false,
                notes: action.payload
            })
        case DELETING:
            return Object.assign({}, state, {
                deleted: false,
                deleting: true
            })
        case DELETED:
            return Object.assign({}, state, {
                deleted: true,
                deleting: false,
                notes: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                editing: false,
                deleting: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer;