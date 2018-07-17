import types from "./types.js";
import axios from "axios";

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