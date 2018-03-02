import { v4 } from 'uuid';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELERE_NOTE';
export const TOGGLE_DELETE = 'TOGGLE_DELETE';
export const TITLE_SORT = 'TITLE_SORT';
export const NEWEST_SORT = 'NEWEST_SORT';
export const OLDEST_SORT = 'OLDEST_SORT';

export const addNote = data => ({
  type: ADD_NOTE,
  id: v4(),
  title: data.title,
  body: data.body,
  created: data.created,
  stamp: data.stamp,
});

export const updateNote = data => ({
  type: UPDATE_NOTE,
  id: data.id,
  title: data.title,
  body: data.body,
});

export const deleteNote = data => ({
  type: DELETE_NOTE,
  id: data.id,
});

export const toggleDelete = data => ({
  type: TOGGLE_DELETE,
});

export const titleSort = data => ({
  type: TITLE_SORT,
});

export const newestSort = data => ({
  type: NEWEST_SORT,
});

export const oldestSort = data => ({
  type: OLDEST_SORT,
});
