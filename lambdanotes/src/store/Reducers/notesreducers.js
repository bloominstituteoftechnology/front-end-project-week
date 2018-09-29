import {
    POSTING_NOTE,
    POSTED_NOTE,
    GETTING_NOTES,
    GOT_NOTES,
    GETTING_SINGLE_NOTE,
    GOT_SINGLE_NOTE,
    CLEAR_NOTE_VIEW,
    IS_EDITING_NOTE,
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

const noteViewerInitial = {
    tags: [],
    title: "",
    textBody: "",
    _id: "",
    __v: -1
};

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
            return {...state, status: {...state.status, gettingNotes: true, gotNotes: false, isEditing: false, noteMessage: "", noteError: ""}};
        case GOT_NOTES:
            return {...state, status: {...state.status, gettingNotes: false, gotNotes: true}, notes: action.payload, noteViewer: noteViewerInitial};
        case GETTING_SINGLE_NOTE:
            return {...state, status: {...state.status, gettingSingleNote: true, gotSingleNote: false, isEditing: false, noteMessage: "", noteError: ""}, noteViewer: noteViewerInitial};
        case GOT_SINGLE_NOTE:
            return {...state, status: {...state.status, gettingSingleNote: false, gotSingleNote: true, noteError: action.payload.errorMessage ? action.payload.errorMessage : ""}, noteViewer: {...action.payload}};
        //~~~~~PUT Handling~~~~~//
        case CLEAR_NOTE_VIEW:
            return {...state, status: {...state.status, isEditing: false}, noteViewer: noteViewerInitial};
        case IS_EDITING_NOTE:
            return {...state, status: {...state.status, isEditing: true}};
        case PUTTING_NOTE:
            return {...state, status: {...state.status, puttingNote: true, puttedNote: false, noteMessage: "", noteError: ""}};
        case PUTTED_NOTE:
            return {...state, status: {...state.status, puttingNote: false, puttedNote: true}, noteViewer: noteViewerInitial};
        //~~~~~DELETE Handling~~~~~//
        case DELETE_PROMPT:
            return {...state, status: {...state.status, deletePrompt: !state.status.deletePrompt}};
        case DELETING_NOTE:
            return {...state, status: {...state.status, deletingNote: true, deletedNote: false, noteMessage: "", noteError: ""}};
        case DELETED_NOTE:
            return {...state, status: {...state.status, deletingNote: false, deletedNote: true, deletePrompt: false, noteMessage: action.payload.success}, noteViewer: noteViewerInitial};
        //~~~~~default~~~~~//
        default:
            return state;
    }
};
