import {notes} from '../Data/Notes';
export const GETNOTES = 'GETNOTES';

export const getNotes = () => {
  return ({type: GETNOTES, payload: notes})
}
