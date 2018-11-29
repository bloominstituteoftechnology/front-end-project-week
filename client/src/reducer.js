import { combineReducers } from 'redux';

import { REQUEST_ALL_NOTES, RECEIVE_ALL_NOTES, ERROR } from './components/actions/index';
import { ADD_NEW_NOTE, PREVIEW_NEW_NOTE, RESET_NEW_NOTE } from './components/AddNote/actions/index';

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
  }
};


export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_NOTES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_ALL_NOTES:
      return Object.assign({}, state, {isFetching: false, notes: action.notes})
    case ADD_NEW_NOTE:
      return state;
    case PREVIEW_NEW_NOTE:
      return Object.assign({}, state, { newNote: action.newNote });
    case RESET_NEW_NOTE:
      return Object.assign({}, state, { newNote: defaultState.newNote });
    default:
      return state;
  }
}
