import {
    POSTING_NOTE,
    POSTED_NOTE,
    GETTING_NOTES,
    GOT_NOTES,
    GETTING_SINGLE_NOTE,
    GOT_SINGLE_NOTE,
    PUTTING_NOTE,
    PUTTED_NOTE,
    DELETE_PROMPT,
    DELETING_NOTE,
    DELETED_NOTE,
    NOTE_ERROR
} from '../actions/';

const initialState = {
    "notes": [],
    "tags": [],
    "noteViewer": {
        "tags": [],
        "title": "",
        "textBody": "",
        "_id": "",
        "__v": -1
    },
	"status": {
		"postingNote": false,
		"postedNote": false,
		"gettingNotes": false,
        "gotNotes": false,
        "gettingSingleNote": false,
        "gotSingleNote": false,
        "isEditing": false,
		"puttingNote": false,
        "puttedNote": false,
        "deletePrompt": false,
		"deletingNote": false,
        "deletedNote": false,
        "noteMessage": "",
		"noteError": ""
	}
}

export default (state = initialState, action) => {
    switch(action.type) {
        //~~~~~Error Handling~~~~~//
        case NOTE_ERROR:
            return {...state, status: {...state.status, postingNote: false, gettingNotes: false, gettingSingleNote: false, puttingNote: false, deletingNote: false, noteMessage: "", noteError: action.payload}};
        //~~~~~POST Handling~~~~~//
        case POSTING_NOTE:
            return {...state, status: {...state.status, postingNote: true, postedNote: false, noteMessage: "", noteError: ""}};
        case POSTED_NOTE:
            return {...state, status: {...state.status, postingNote: false, postedNote: true}};
        //~~~~~GET Handling~~~~~//
        case GETTING_NOTES:
            return {...state, status: {...state.status, gettingNotes: true, gotNotes: false, noteMessage: "", noteError: ""}};
        case GOT_NOTES:
            return {...state, status: {...state.status, gettingNotes: false, gotNotes: true, isEditing: false}, notes: action.payload, noteViewer: {tags: [], title: "", textBody: "", _id: "", __v: -1} };
        case GETTING_SINGLE_NOTE:
            console.log('GETTING_SINGLE_NOTE', action)
            return {...state, status: {...state.status, gettingSingleNote: true, gotSingleNote: false, isEditing: false, noteMessage: "", noteError: ""}, noteViewer: {tags: [], title: "", textBody: "", _id: "", __v: -1}};
        case GOT_SINGLE_NOTE:
            console.log('GOT_SINGLE_NOTE', action);
            return {...state, status: {...state.status, gettingSingleNote: false, gotSingleNote: true, isEditing: true, noteError: action.payload.errorMessage ? action.payload.errorMessage : ""}, noteViewer: {...action.payload}};
        //~~~~~PUT Handling~~~~~//
        case PUTTING_NOTE:
            console.log('PUTTING_NOTE', action);
            return {...state, status: {...state.status, puttingNote: true, puttedNote: false, noteMessage: "", noteError: ""}};
        case PUTTED_NOTE:
            console.log('PUTTED_NOTE', action);
            return {...state, status: {...state.status, isEditing: false, puttingNote: false, puttedNote: true}, noteViewer: {tags: [], title: "", textBody: "", _id: "", __v: -1}};
        //~~~~~DELETE Handling~~~~~//
        case DELETE_PROMPT:
            return {...state, status: {...state.status, deletePrompt: !state.status.deletePrompt}};
        case DELETING_NOTE:
            return {...state, status: {...state.status, deletingNote: true, deletedNote: false, noteMessage: "", noteError: ""}};
        case DELETED_NOTE:
            return {...state, status: {...state.status, deletingNote: false, deletedNote: true, deletePrompt: false, noteMessage: action.payload.success}, noteViewer: {tags: [], title: "", textBody: "", _id: "", __v: -1}};
        //~~~~~default~~~~~//
        default:
            return state;
    }
};
