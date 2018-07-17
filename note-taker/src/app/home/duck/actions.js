import types from "./types.js";

const requestNotes= () => {
  return {
    type: types.FETCHING_NOTES,
  }
};
const receiveNotes = (data) => {
  return {
    type: types.FETCHED_NOTES,
    notesData: data
  }
};

export default {
  requestNotes,
  receiveNotes
}