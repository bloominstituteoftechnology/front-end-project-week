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
  moveItem,
  authSuccess,
  authError,
  authLogout,
  authRequest,
  clearError,
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
    [moveItem]: (state, { payload: { target, source } }) => {
      const nextState = state.slice();
      const sourceItem = nextState.splice(source, 1)[0];
      nextState.splice(target, 0, sourceItem);
      return nextState;
    },
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

const error = handleActions(
  {
    [combineActions(
      fetchNotesFailure,
      fetchOneFailure,
      addNoteFailure,
      editNoteFailure,
      deleteNoteFailure,
      authError,
    )]: (_, { payload }) => payload,
    [clearError]: () => null,
  },
  null,
);

const isLoggedIn = handleActions(
  {
    [authSuccess]: () => true,
    [combineActions(authLogout, authError)]: () => false,
  },
  false,
);

const authenticating = handleActions(
  {
    [authRequest]: () => true,
    [combineActions(authSuccess, authError)]: () => false,
  },
  false,
);

const token = handleAction(authSuccess, (_, { payload }) => payload, '');

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
  isLoggedIn,
  token,
  authenticating,
});
