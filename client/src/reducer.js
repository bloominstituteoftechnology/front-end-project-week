import { combineReducers } from 'redux';

import { REQUEST_ALL_NOTES, RECEIVE_ALL_NOTES, ERROR, REQUEST_DELETE_NOTE, DID_DELETE_NOTE } from './components/actions/index';
import { ADD_NEW_NOTE, PREVIEW_NEW_NOTE, RESET_NEW_NOTE, REQUEST_ADD_NOTE, POST_ADD_NOTE } from './components/AddNote/actions/index';
import { PREVIEW_EDIT_NOTE, REQUEST_EDIT_NOTE, DID_EDIT_NOTE, RESET_EDIT_NOTE } from './components/EditNote/actions/index';

const defaultState = {
  isFetching: false,
  notes: [],
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

Click [here](https://cultofthepartyparrot.com/) to go somewhere.`
  },
  editNote: {
    title: '',
    text: '',
    id: '',
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
      return Object.assign({}, state, { isDeleting: false, delId: action.delId})
    case PREVIEW_EDIT_NOTE:
      return Object.assign({}, state, { editNote: action.editNote })
    case RESET_EDIT_NOTE:
      return Object.assign({}, state, { editNote: defaultState.editNote })
    case REQUEST_EDIT_NOTE:
      return Object.assign({}, state, {isEditing: true})
      case DID_EDIT_NOTE:
        return Object.assign({}, state, {isEditing: false})
    default:
      return state;
  }
}
