// Action Types
export const ADD_NOTES = 'ADD_Notes ';
export const TOGGLE_NOTES  = 'TOGGLE_Notes ';
export const REMOVE_NOTES  = 'REMOVE_Notes ';
export const GET_NOTES  = 'GET_Notes ';
// Action Creators


export const addTodo = note => {
  return {
    type: ADD_NOTES ,
    payload: note
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_NOTES,
    payload: id
  };
};

export const removeTodos = () => {
  return {
    type: REMOVE_NOTES
  };
};

export const getTodos = todos => {
  return {
    type: GET_NOTES,
    payload: todos
  };
};
