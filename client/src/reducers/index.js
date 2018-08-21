import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import {
  fetchNotesSuccess,
  fetchNotesRequest,
  fetchNotesFailure,
} from '../actions';

const notes = handleActions(
  {
    [fetchNotesSuccess]: (_, { payload }) => payload,
  },
  [],
);

const isFetching = handleActions(
  {
    [fetchNotesRequest]: () => true,
    [combineActions(fetchNotesSuccess, fetchNotesFailure)]: () => false,
  },
  false,
);

export default combineReducers({
  notes,
  isFetching,
});
