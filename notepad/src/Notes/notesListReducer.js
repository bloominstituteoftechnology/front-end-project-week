import { FETCHED, UPDATED, DELETED, ADDED } from './notesActions';

const initState = {
  notes: []
};

export default (notes = [], action) => {
  switch (action.type) {
    case FETCHED:
      return action.notes;
    case UPDATED:
      return action.notes;
    case DELETED:
      return action.notes;
    case ADDED:
      return action.notes;
    default:
      return notes;
  }
};