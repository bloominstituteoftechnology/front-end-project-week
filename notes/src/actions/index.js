import axios from "axios";

export const GET_NOTES = "GET_NOTES";

export const getNotes = () => dispatch => {
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      dispatch({ type: GET_NOTES, payload: response.data });
    })
    .catch(err => console.log(err));
};
