
export const NOTE_EXPANDED = 'NOTE_EXPANDED';

export const showWholeNote = id => dispatch => {
  dispatch({ type: NOTE_EXPANDED, payload: id });
  console.log(id);
}
