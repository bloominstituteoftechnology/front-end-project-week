import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, MARK_COMPLETE } from '../actions';
import update from 'immutability-helper';

const initialState =  [
  {id: 1, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 2, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 3, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 4, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 5, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 6, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 7, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 8, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
  {id: 9, title: "Note Title", text: "Hello, I'm the note's text. I am a note you took about something at one point in time", completed: false},
];

export default (notes=initialState, action) => {
	switch(action.type) {
		case ADD_NOTE:
      action.note.id = notes.length;
			const addedState = update(notes, {$push: [action.note]});
			return addedState;
    case MARK_COMPLETE:
      const completed = notes[action.index].completed;
      const completedState = update(notes, {[action.index]: {completed: {$set: !completed}}});
      return completedState;
    case UPDATE_NOTE:
      const updatedNote = action.note;
      const updatedState = update(notes, {[action.index]: {$set: updatedNote}});
      return updatedState;
    case DELETE_NOTE:
      const deletedState = update(notes, {$splice: [[action.index, 1]]});
      return deletedState;
		default: 
			return notes;
	}
}