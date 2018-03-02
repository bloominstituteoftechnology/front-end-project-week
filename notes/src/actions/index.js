import shortid from 'shortid';

export const addNote = (info) => {
  return {
    type: 'ADD_NOTE',
    payload: { ...info, id: shortid.generate() },
    created: shortid.generate(),
  }
}

export const editNote = (info) => {
  return {
    type: 'EDIT_NOTE',
    payload: info,
  }
}

export const viewNote = (info) => {
  return {
    type: 'VIEW_NOTE',
    payload: info,
  }
}

export const deleteNote = (info) => {
  return {
    type: 'DELETE_NOTE',
    payload: info,
  }
}

export const reorderNotes = (newNotes, searching) => {
  return {
    type: 'REORDER_NOTES',
    payload: newNotes,
    searching: searching,
  }
}

export const sortNotes = (sortedNotes, direction) => {
  return {
    type: 'SORT_NOTES',
    payload: sortedNotes,
    sorted: direction,
    hash: shortid.generate(),
  }
}

export const searchNotes = (searchResults, terms) => {
  return {
    type: 'SEARCH_NOTES',
    payload: searchResults,
    searchTerms: terms,
  }
}