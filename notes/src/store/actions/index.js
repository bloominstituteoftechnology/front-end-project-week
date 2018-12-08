//actions!
//
export const FETCHING_NOTES = 'FETCHING_NOTES';

export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING_NOTES});
};
