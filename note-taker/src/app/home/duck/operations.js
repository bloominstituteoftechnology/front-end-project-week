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

        dispatch(receiveNotesAction(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default {
  fetchNotes
};
