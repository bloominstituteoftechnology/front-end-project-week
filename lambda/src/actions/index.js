import { testNotes } from '../data';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ADDING_NOTES = 'ADDING_NOTES';
export const ADDED_NOTES = 'ADDED_NOTES';
export const ERROR = 'ERROR';

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    // Do something
    const notes = testNotes;
    dispatch({ type: FETCHED_NOTES, payload: notes });
  };
};

let idCount = 3;
export const addNewNote = data => {
  console.log(data);
  return dispatch => {
    dispatch({ type: ADDING_NOTES });
    //Do the api calls here
    testNotes.push(data);
    dispatch({
      type: ADDED_NOTES,
      payload: {
        ...data,
        id: idCount++
      }
    });
  };
};
