import { addNote } from "../actions";

const initialState = {
  notes: ["Note 1", "Note 2"]
};

export default function notes(state = initialState, action) {
  return state;
}
