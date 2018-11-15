import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://fe-notes.herokuapp.com/note'
});
