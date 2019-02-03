import types from "./types.js";

const requestNotes= () => {
  return {
    type: types.FETCHING_NOTES,
  }
};
const receiveNotes = (notesData) => {
  return {
    type: types.FETCHED_NOTES,
    notesData
  }
};

export default {
  requestNotes,
  receiveNotes
}