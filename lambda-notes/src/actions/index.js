
export const NOTE_EXPANDED = 'NOTE_EXPANDED';

export const showWholeNote = () => dispatch => {
  dispatch({ type: NOTE_EXPANDED });
  
}