import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_DATA,
  GET_A_NOTE,
  FETCH_DATA,
  ERROR,
  GET_TASKS,
  ADD_TASK,
  COMPLTETE,
} from '../actions';

const initialState = {
  notes: [],
  note: {},
  fetching: false,
  success: false,
  error: null,
  // tasks: {
  //   "task-1": { id: "task-1", content: "Take out the garbage", complete: true },
  //   "task-2": {
  //     id: "task-2",
  //     content: "Watch my favorite show",
  //     complete: true
  //   },
  //   "task-3": { id: "task-3", content: "Charge my phone", complete: true },
  //   "task-4": { id: "task-4", content: "Cook dinner", complete: false }
  // }
};

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, fetching: true, success: false };

    case ERROR:
      return {
        ...state,
        error: 'Error with notes' + action.err,
        fetching: false,
        success: false,
      };

    case GET_DATA:
      return {
        ...state,
        notes: action.payload,
        fetching: false,
        success: true,
      };

    case GET_A_NOTE:
      return {
        note: action.payload,
        fetching: false,
        success: true,
      };

    case ADD_NOTE:
      const newNote = { ...action.payload };

      return {
        ...state,
        notes: [
          ...state.notes,
          {
            ...newNote,
          },
        ],
        fetching: false,
        success: true,
      };

    case DELETE_NOTE:
      let position = state.notes.findIndex(note => note._id === action.id);
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, position),
          ...state.notes.slice(position + 1),
        ],
        fetching: false,
        success: true,
      };

    case EDIT_NOTE:
      let editPosition = state.notes.findIndex(
        note => note._id === parseInt(action.payload._id, 10)
      );
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, editPosition),
          { ...action.payload },
          ...state.notes.slice(editPosition + 1),
        ],
        fetching: false,
        success: true,
      };

    // Task Reducers
    case GET_TASKS:
      return {
        ...state,
        taskChange: false,
      };

    case ADD_TASK:
      let task = `task-${Math.floor(Math.random() * 1000)}`;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [task]: { id: task, content: action.payload, complete: false },
        },
        taskChange: true,
      };

    case COMPLTETE:
      let changeTask = state.tasks[action.payload];
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload]: { ...changeTask, complete: !changeTask.complete },
        },
        taskChange: true,
      };

    default:
      return state;
  }
};
