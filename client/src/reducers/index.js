import { combineReducers } from 'redux';
import { handleActions, combineActions } from 'redux-actions';
import {
  fetchNotesSuccess,
  fetchNotesRequest,
  fetchNotesFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
} from '../actions';

const notes = handleActions(
  {
    [fetchNotesSuccess]: (_, { payload }) => payload,
  },
  [],
);

const currentNote = handleActions(
  {
    [fetchOneSuccess]: (_, { payload }) => payload,
  },
  {},
);

const isFetching = handleActions(
  {
    [combineActions(fetchNotesRequest, fetchOneRequest)]: () => true,
    [combineActions(
      fetchNotesSuccess,
      fetchNotesFailure,
      fetchOneSuccess,
      fetchOneFailure,
    )]: () => false,
  },
  false,
);

export default combineReducers({
  notes,
  currentNote,
  isFetching,
});
