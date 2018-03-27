import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const getNotes = () => (dispatch) => {
	dispatch({ type: FETCHING });
  axios
    .get(`http://localhost:5000/api/friends`)
    .then(response => {
      dispatch({ type: FETCHED, notes: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, message: 'fetching error' });
    });
};
