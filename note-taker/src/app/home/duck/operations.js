import axios from "axios";
import Creators from "./actions.js";

const requestNotesAction = Creators.requestNotes;
const receiveNotesAction = Creators.receiveNotes;


const fetchNotes = () => {
  const promise = axios.get("https://killer-notes.herokuapp.com/note/get/all");
  return dispatch => {
 
    dispatch(requestNotesAction());
    promise
      .then(response => {
        console.log(response);
        dispatch(receiveNotesAction(response));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default {
  fetchNotes
};
