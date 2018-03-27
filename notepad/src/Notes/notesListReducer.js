import { FETCH_NOTES_SUCCESS } from './notesActions';

export default (notes = [], action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return action.notes;
    default:
      return notes;
  }
};