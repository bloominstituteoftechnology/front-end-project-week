import React from 'react';
import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_NOTE, NOTE_FETCHED, EDIT_NOTE, SAVING_NOTE, NOTE_SAVED, DELETING_NOTE, NOTE_DELETED, ADD_NOTE, ERROR } from '../action-types';

const initialState = {
  fetchingNotes: false,
  notesFetched: false,
  fetchingNote: false,
  noteFetched: false,
  editingNote: false,
  savingNote: false,
  noteSaved: false,
  deletingNote: false,
  noteDeleted: false,
  addingNote: false,
  error: false,
  notes: [],
  message: '',
  note: null,
  id: null
}

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {
        fetchingNotes: true,
        message: action.message
      });
    case NOTES_FETCHED:
      return Object.assign({}, state, {
        ...state,
        fetchingNotes: false,
        notesFetched: true,
        fetchingNote: false,
        noteFetched: false,
        editingNote: false,
        savingNote: false,
        noteSaved: false,
        deletingNote: false,
        noteDeleted: false,
        addingNote: false,
        error: false,
        notes: action.payload
      });
    case FETCHING_NOTE:
      return Object.assign({}, state, {
        fetchingNote: true,
        message: action.message,
        id: action.payload
      });
    case NOTE_FETCHED:
      return Object.assign({}, state, {
        notesFetched: false,
        fetchingNotes: false,
        fetchingNote: false,
        noteFetched: true,
        note: action.payload,
        id: action.payload._id
      });
    case EDIT_NOTE:
      return Object.assign({}, state, {
        ...state,
        fetchingNotes: false,
        notesFetched: false,
        fetchingNote: false,
        savingNote: false,
        noteSaved: false,
        deletingNote: false,
        noteDeleted: false,
        addingNote: false,
        error: false,
        editingNote: true,
        noteFetched: true,
        note: action.payload
      });
    case SAVING_NOTE:
      return Object.assign({}, state, {
        savingNote: true,
        addingNote: false,
        editingNote: false,
        noteFetched: false,
        note: action.payload,
        message: action.message,
        newNote: action.payload.textBody,
        newTitle: action.payload.title
      });
    case NOTE_SAVED:
      return Object.assign({}, state, {
        savingNote: false,
        noteSaved: true,
        message: action.message,
        note: null
      });
    case ADD_NOTE:
      return Object.assign({}, state, {
        addingNote: true,
      });
    case DELETING_NOTE:
      return Object.assign({}, state, {
        deletingNote: true,
        message: action.message
      });
    case NOTE_DELETED:
      return Object.assign({}, state, {
        deletingNote: false,
        noteDeleted: true,
        message: action.message
      });
    case ERROR:
      return Object.assign({}, state, {
        error: true,
        message: action.message
      });
    default:
      return state;
  }
}
