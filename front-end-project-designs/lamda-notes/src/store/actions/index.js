import axios from "axios"

export const FETCHING = "FETCHING"
export const FETCHED = "FETCHED"
export const ERROR = "ERROR"

export function fetchCards() {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response)
        dispatch({ type: FETCHED, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "Can't fetch the cards!" })
      })
  }
}
