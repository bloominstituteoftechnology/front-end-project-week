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
  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteFailure,
  updateSearchTerm,
  sortAscending,
  sortDescending,
} from '../actions';

const notes = handleActions(
  {
    [fetchNotesSuccess]: (_, { payload }) => payload,
    [addNoteSuccess]: (state, { payload }) => [...state, payload],
    [editNoteSuccess]: (state, { payload }) =>
      state.map(note => (note._id === payload._id ? payload : note)),
    [sortAscending]: (state, _) =>
      state
        .slice()
        .sort((note1, note2) =>
          note1.title.toLowerCase().localeCompare(note2.title.toLowerCase()),
        ),
    [sortDescending]: (state, _) =>
      state
        .slice()
        .sort(
          (note1, note2) =>
            note1.title.toLowerCase().localeCompare(note2.title.toLowerCase()) *
            -1,
        ),
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

const isDeleting = handleActions(
  {
    [deleteNoteRequest]: () => true,
    [combineActions(deleteNoteSuccess, deleteNoteFailure)]: () => false,
  },
  false,
);

const error = handleAction(
  combineActions(
    fetchNotesFailure,
    fetchOneFailure,
    addNoteFailure,
    editNoteFailure,
    deleteNoteFailure,
  ),
  (_, { payload }) => payload,
  null,
);

const term = handleAction(updateSearchTerm, (_, { payload }) => payload, '');

export default combineReducers({
  notes,
  currentNote,
  isFetching,
  isAdding,
  isEditing,
  isDeleting,
  error,
  term,
});
