export const GET_TODOS = 'GET_TODOS';
export const SUBMIT_TODO = 'SUBMIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const todos = [];

export const getTodos = () => {
  return { 
    type: GET_TODOS,
    payload: todos
  }
};

export const submitTodo = payload => {
  return { 
    type: SUBMIT_TODO,
    payload: payload
  }
};

export const toggleTodo = () => {
  return { 
    type: TOGGLE_TODO,
    payload: 'placeholderData'
  }
};