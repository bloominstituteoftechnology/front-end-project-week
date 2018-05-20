// import { combineReducers } from "redux";
import { ADD_NEW_NOTE } from '../actions/newNote';
import { EDIT_NOTE } from '../actions/editNote';
import { DELETE_NOTE } from '../actions/deleteNote';
import { SIGN_OUT } from '../actions/signOut';
import { CREATE_USER } from '../actions/createUser';
import { LOGIN } from '../actions/login';
import { ERROR } from '../actions/login';

const initState = {
  notes: [],
  activeUser: null,
  loggedIn: false,
  error: null,
  // users: [
  //   {
  //     username: 'DragonRydrz',
  //     password: 'CNCg00dguy5',
  //     notes: [
  //       {
  //         id: 0,
  //         title: 'AJ First Note',
  //         body: 'AJ This is the body of the 1 note',
  //       },
  //       {
  //         id: 1,
  //         title: 'AJ Second Note',
  //         body: 'AJ This is the body of the 2 note',
  //       },
  //       {
  //         id: 2,
  //         title: 'AJ Third Note',
  //         body: 'AJ This is the body of the 3 note',
  //       },
  //       {
  //         id: 3,
  //         title: 'AJ Fourth Note',
  //         body: 'AJ This is the body of the 4 note',
  //       },
  //       {
  //         id: 4,
  //         title: 'AJ Fifth Note',
  //         body: 'AJ This is the body of the 5 note',
  //       },
  //       {
  //         id: 5,
  //         title: 'AJ Sixth Note',
  //         body: 'AJ This is the body of the 6 note',
  //       },
  //       {
  //         id: 6,
  //         title: 'AJ Seventh Note',
  //         body: 'AJ This is the body of the 7 note',
  //       },
  //       {
  //         id: 7,
  //         title: 'AJ Eighth Note',
  //         body: 'AJ This is the body of the 8 note',
  //       },
  //       {
  //         id: 8,
  //         title: 'AJ Ninth Note',
  //         body: 'AJ This is the body of the 9 note',
  //       },
  //     ],
  //   },
  //   {
  //     username: 'AGenung',
  //     password: '12345678',
  //     notes: [
  //       { id: 0, title: 'AJ First', body: '1 note' },
  //       { id: 1, title: 'AJ Second', body: '2 note' },
  //       { id: 2, title: 'AJ Third', body: '3 note' },
  //       { id: 3, title: 'AJ Fourth', body: '4 note' },
  //       { id: 4, title: 'AJ Fifth', body: '5 note' },
  //       { id: 5, title: 'AJ Sixth', body: '6 note' },
  //       { id: 6, title: 'AJ Seventh', body: '7 note' },
  //       { id: 7, title: 'AJ Eighth', body: '8 note' },
  //       { id: 8, title: 'AJ Ninth', body: '9 note' },
  //     ],
  //   },
  // ],
};

// export default combineReducers(notes);

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return { ...state, notes: action.payload };
    case EDIT_NOTE:
      // let notes = state.notes.filter(item => item.id !== action.payload.id);
      // notes.unshift(action.payload);
      return { ...state, notes: action.payload };
    case DELETE_NOTE:
      // let newNotes = state.notes.filter(item => item.id !== action.payload);
      return { ...state, notes: action.payload };
    case LOGIN:
      return {
        ...state,
        activeUser: action.payload,
        loggedIn: true,
        notes: action.payload.notes,
      };
    case SIGN_OUT:
      // const userNotesToSave = state.notes;
      // const updatedUserData = { ...state.activeUser, notes: userNotesToSave };
      // const newUsersToSave = state.users.filter(
      //   user => user.username !== state.activeUser.username
      // );
      // newUsersToSave.push(updatedUserData);
      // console.log(newUsersToSave);

      return {
        ...state,
        notes: [],
        activeUser: null,
        loggedIn: false,
        // users: newUsersToSave,
      };
    case CREATE_USER:
      return {
        ...state,
        activeUser: action.payload,
        notes: action.payload.notes,
        loggedIn: true,
      };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
