export function getSmurfData() {
  return {
    type: 'GET_SMURFS',
    payload: {}
  }
}

export function saveNoteInStore(note) {
  return {
    type: 'SAVE_NOTE',
    payload: note
  }
}
