// import actions
import {ADDNOTE, EDITNOTE, DELETENOTE} from '../actions/index';

export default (notes = [], action) => {
  switch(action.type) {
    case ADDNOTE:
      return notes.concat(action.payload);
    default:
      return notes;
  }
}