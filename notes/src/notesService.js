import axios from 'axios';
import { apiUri } from './globalVariables';

export const createNote = async (newNote) => {
  const response = await axios.post(`${apiUri}/note/create`, newNote);
  return response;
};