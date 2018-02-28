export const CREATE_NOTE = 'ADD_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const CREATE_NOTE = note => {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
};

export const VIEW_NOTE = index => {
  return {
    type: VIEW_NOTE,
    payload: index,
  };
};

export const EDIT_NOTE = index => {
  return {
    type: EDIT_NOTE,
    payload: index,
  };
};

export const DELETE_NOTE = index => {
  return {
    type: DELETE_NOTE,
    payload: index,
  };
};
