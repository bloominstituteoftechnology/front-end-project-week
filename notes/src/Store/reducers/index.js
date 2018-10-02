import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCHING_DATA,
  FETCHED_DATA,
  FETCH_TASKS,
  ADD_TASK,
  COMPLETE,
  ERROR
} from '../actions';

const initialState = {
  notes: [],
  fetching: false,
  success: false,
  error: null,
  tasks: {
    'task-1': { id: 'task-1', content: 'Make breakfast', complete: true },
    'task-2': { id: 'task-2', content: 'Work out', complete: true },
    'task-3': { id: 'task-3', content: 'Coding challenge', complete: false },
    'task-4': { id: 'task-4', content: 'Sprint challenge', complete: false }
  }
};

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetching: true, success: false };
    case FETCHED_DATA:
      return {
        ...state,
        notes: action.payload,
        fetching: false,
        success: true
      };
    case ERROR:
      return { ...state, error: 'Error' };
    case ADD_NOTE:
      const newNote = { ...action.payload };
      return {
        ...state,
        notes: [...state.notes, { ...newNote }],
        fetching: false,
        success: true
      };
    case DELETE_NOTE:
      let position = state.notes.findIndex(note => note._id === action.id);
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, position),
          ...state.notes.slice(position + 1)
        ],
        fetching: false,
        success: true
      };
    case EDIT_NOTE:
      let editPosition = state.notes.findIndex(
        note => note._id === action.payload._id
      );
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, editPosition),
          { ...action.payload },
          ...state.notes.slice(editPosition + 1)
        ],
        fetching: false,
        success: true
      };

    case FETCH_TASKS:
      return {
        ...state,
        taskChange: false
      };
    case ADD_TASK:
      let task = `task-${Math.floor(Math.random() * 1000)}`;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [task]: { id: task, content: action.payload, complete: false }
        },
        taskChange: true
      };
    case COMPLETE:
      let changeTask = state.tasks[action.payload];
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload]: { ...changeTask, complete: !changeTask.complete }
        },
        taskChange: true
      };

    default:
      return state;
  }
};
