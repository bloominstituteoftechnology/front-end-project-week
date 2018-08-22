import { combineReducers } from 'redux';
import { handleAction, handleActions, combineActions } from 'redux-actions';
import {
  fetchNotesSuccess,
  fetchNotesRequest,
  fetchNotesFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
  addNoteRequest,
  addNoteSuccess,
  addNoteFailure,
  editNoteRequest,
  editNoteSuccess,
  editNoteFailure,
} from '../actions';

const notes = handleActions(
  {
    [fetchNotesSuccess]: (_, { payload }) => payload,
    [addNoteSuccess]: (state, { payload }) => [...state, payload],
    [editNoteSuccess]: (state, { payload }) =>
      state.map(note => (note._id === payload._id ? payload : note)),
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

const isAdding = handleActions(
  {
    [addNoteRequest]: () => true,
    [combineActions(addNoteSuccess, addNoteFailure)]: () => false,
  },
  false,
);

const isEditing = handleActions(
  {
    [editNoteRequest]: () => true,
    [combineActions(editNoteSuccess, editNoteFailure)]: () => false,
  },
  false,
);

const error = handleAction(
  combineActions(addNoteFailure, editNoteFailure),
  (_, { payload }) => payload,
  null,
);

export default combineReducers({
  notes,
  currentNote,
  isFetching,
  isAdding,
  isEditing,
  error,
});
