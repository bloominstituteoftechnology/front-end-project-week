import axios from 'axios';
import { apiUri } from './globalVariables';

export const createNote = async newNote => {
  return await axios.post(`${apiUri}/note/create`, newNote);
};

export const editNote = async (id, editedNote) => {
  return await axios.put(`${apiUri}/note/edit/${id}`, editedNote);
};

export const getNote = async id => {
  return await axios.get(`${apiUri}/note/get/${id}`);
};

export const listNotes = async () => {
  return await axios.get(apiUri);
};

export const deleteNote = async id => {
  await axios.delete(`${apiUri}/note/delete/${id}`);
};