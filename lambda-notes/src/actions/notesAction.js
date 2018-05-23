import { FETCH_NOTES } from "../actionTypes/actionTypes";
import { database } from "../config/fire";

export const fetchNote = () => {
  return (dispatch) => {
    database.on("value", snapshot => {
      dispatch({
        type: FETCH_NOTES,
        payload: snapshot.val()
      })
    });
  }
}

export const addNote = (note) => {
  return () => {
    database.push(note)
  };
}