import {
    POSTING_NOTE,
    POSTED_NOTE,
    GETTING_NOTES,
    GOT_NOTES,
    GETTING_SINGLE_NOTE,
    GOT_SINGLE_NOTE,
    PUTTING_NOTE,
    PUT_NOTE,
    DELETE_PROMPT,
    DELETING_NOTE,
    DELETED_NOTE,
    NOTE_ERROR,
    NOTE_TO_EDIT
} from '../actions/';

const initialState = {
	"notes": [], 
	"editing": {
		"isEditing": false,
		"tmpNote": {
			"tags": [],
			"title": "",
			"textBody": "",
			"_id": "",
			"__v": -1
		}
    },
	"status": {
		"postingNote": false,
		"postedNote": false,
		"gettingNotes": false,
        "gotNotes": false,
        "gettingSingleNote": false,
        "gotSingleNote": false,
		"puttingNote": false,
        "putNote": false,
        "deletePrompt": false,
		"deletingNote": false,
		"deletedNote": false,
		"noteError": ""
	}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NOTE_ERROR:
            return {...state, status: {...state.status, noteError: action.payload}};
        case POSTING_NOTE:
            return {...state, status: {...state.status, postingNote: true, postedNote: false}};
        case POSTED_NOTE:
            return {...state, status: {...state.status, postingNote: false, postedNote: true}};
        case GETTING_NOTES:
            return {...state, status: {...state.status, gettingNotes: true, gotNotes: false}};
        case GOT_NOTES:
            return {...state, status: {...state.status, gettingNotes: false, gotNotes: true}, notes: action.payload};
        case GETTING_SINGLE_NOTE:
            return {...state, status: {...state.status, gettingSingleNote: true, gotSingleNote: false}};
        case GOT_SINGLE_NOTE:
            return {...state, status: {...state.status, gettingSingleNote: false, gotSingleNote: true}, notes: [...state.notes, action.payload]};
        case PUTTING_NOTE:
            return {...state, status: {...state.status, puttingNote: true, putNote: false}};
        case PUT_NOTE:
            return {...state, status: {...state.status, puttingNote: false, putNote: true}, editing: {...state.editing, isEditing: false, tmpNote: {tags: [], title: '', textBody: '', _id: '', __v: -1}}, notes: action.payload};
        case DELETE_PROMPT:
            return {...state, status: {...state.status, deletePrompt: true}};
        case DELETING_NOTE:
            return {...state, status: {...state.status, deletingNote: true, deletedNote: false}};
        case DELETED_NOTE:
            return {...state, status: {...state.status, deletingNote: false, deletedNote: true, deletePrompt: false}, notes: action.payload};
        case NOTE_TO_EDIT:
            const noteToEdit = state.notes.find( (note) => action.payload === note._id);
            return {...state, editing: {...state.editing, isEditing: true, tmpNote: {tags: noteToEdit.tags, title: noteToEdit.title, textBody: noteToEdit.textBody, _id: noteToEdit._id, __v: noteToEdit.__v}}};
        default:
            return state;
    }
};
