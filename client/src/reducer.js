import { combineReducers } from 'redux';

import { REQUEST_ALL_NOTES, RECEIVE_ALL_NOTES, ERROR, REQUEST_DELETE_NOTE, DID_DELETE_NOTE } from './components/actions/index';
import { ADD_NEW_NOTE, PREVIEW_NEW_NOTE, RESET_NEW_NOTE, REQUEST_ADD_NOTE, POST_ADD_NOTE } from './components/AddNote/actions/index';
import { PREVIEW_EDIT_NOTE, REQUEST_EDIT_NOTE, DID_EDIT_NOTE, RESET_EDIT_NOTE } from './components/EditNote/actions/index';
import {  NOTE_SORT, NOTE_FILTER, } from './components/Notes/Options/actions/index';
import { SET_SORTED_NOTES } from './components/Notes/actions/index';
import { LOGIN, LOGOUT, CREATE_ACCOUNT, DELETE_ACCOUNT } from './components/actions';

const defaultState = {
  user: {
    loggedIn: false,
    userName: null,
    password: null,
  },
  isFetching: false,
  notes: [],
  sortedNotes: [],
  newNote: {
    title: 'Note Title',
    text: `GitHub flavored markdown is enabled; Click the preview button to see the results

Lorem ipsum dolor sit amet, luctus feugiat in proin suspendisse suspendisse nisl, mollis faucibus ac sodales dui. Sed eu lobortis. Aliquam odio gravida placerat malesuada in vehicula, eleifend adipiscing. Sit sed vitae elit nunc lacinia, erat quis amet elit eget velit pede, blandit mi vel nullam vivamus justo, dictum dolor vehicula. Dui in, est est, volutpat interdum mattis diam, a ut dolor volutpat, consectetuer torquent velit eget.

Markdown Example
===============

This is the raw markdown used to generate the below web content.

Bulleted List
-------------

* Foo
* Bar

Numbered List
-------------

1. Foo
2. Bar

Formatting
----------

Can be **bold** or *italic*

Links
-----

Click [here](https://cultofthepartyparrot.com/) to go somewhere.`,
    tags: [],
  },
  editNote: {
    title: '',
    text: '',
    id: '',
  },
  sortNotes: {
    newest: false,
    alpha: {
      sort: false,
      dir: 'A-Z',
    },
    title: {
      sort: false,
      dir: 'Ascend',
    },
    text: {
      sort: false,
      dir: 'Ascend',
    }
  },
  filterNotes: {
    textLength: 0,
  }

};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_NOTES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_ALL_NOTES:
      return Object.assign({}, state, {isFetching: false, notes: action.notes})
    case PREVIEW_NEW_NOTE:
      return Object.assign({}, state, { newNote: action.newNote });
    case RESET_NEW_NOTE:
      return Object.assign({}, state, { newNote: defaultState.newNote });
    case REQUEST_ADD_NOTE:
      return Object.assign({}, state, { isPosting: true });
    case POST_ADD_NOTE:
      return Object.assign({}, state, { isPosting: false, postId: action.postId });
    case REQUEST_DELETE_NOTE:
      return Object.assign({}, state, { isDeleting: true });
    case DID_DELETE_NOTE:
      return Object.assign({}, state, { isDeleting: false, delId: action.delId, /* user: state.user */ });
    case PREVIEW_EDIT_NOTE:
      return Object.assign({}, state, { editNote: action.editNote });
    case RESET_EDIT_NOTE:
      return Object.assign({}, state, { editNote: defaultState.editNote });
    case REQUEST_EDIT_NOTE:
      return Object.assign({}, state, {isEditing: true});
    case DID_EDIT_NOTE:
      return Object.assign({}, state, {isEditing: false});
    case NOTE_SORT:
      return Object.assign({}, state, { sortNotes: action.sortNotes });
    case NOTE_FILTER:
      return Object.assign({}, state, { filterNotes: action.filterNotes });
    case SET_SORTED_NOTES:
      return Object.assign({}, state, { sortedNotes: action.sortedNotes });
    case LOGIN:
      return Object.assign({}, state, { user: { loggedIn: true, userName: state.user.userName, password: state.user.password, }});
    case LOGOUT:
      return Object.assign({}, state, { user: { loggedIn: false, userName: state.user.userName, password: state.user.password, }});
    case CREATE_ACCOUNT:
      return Object.assign({}, state, { user: { userName: action.userName, password: action.password }});
    case DELETE_ACCOUNT:
      return Object.assign({}, state, { user: { loggedin: false, userName: null, password: null, }})
    default:
      return state;
  }
}
