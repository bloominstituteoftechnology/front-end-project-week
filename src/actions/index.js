export function saveNoteInStore(note) {
  return {
    type: 'SAVE_NOTE',
    payload: note
  }
}

export function updateNoteInStore(note) {
  return {
    type: 'UPDATE_NOTE',
    payload: note
  }
}

export function deleteNoteInStore(noteId) {
  return {
    type: 'DELETE_NOTE',
    payload: noteId
  }
}

// Only three action creators=> My reducer will be small=> I will use only one reducer.