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
    NOTE_ERROR
} from '../actions/';

const initialState = {
	"notes": [
		{
			"tags": ["tag1", "tag2", "tagN"],
			"title": "asdf",
			"textBody": "ghgchfgjhghjghj fgh fgh fgh fthfghfthf fhfhth",
			"_id": "5ba8145811b7c40014cb7abf",
			"__v": 0
        },
        {
			"tags": ["tag1", "tag2", "tagN"],
			"title": "ghjkl",
			"textBody": "fgfdgfgbfc fdghtybncv jghj fgh fgh fgh fthfghfthf fhfhth",
			"_id": "5ba85s6sd6tyfd0014cb7abf",
			"__v": 0
        },
        {
			"tags": ["tag1", "tag2", "tagN"],
			"title": "qwerty",
			"textBody": "ghaaaaaaaaaaaahjghj fgh fgh fgh fthfghfthf fhfhth",
			"_id": "5drftyr51b7c40014cb7abf",
			"__v": 0
		}
    ], 
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
            return {...state, status: {...state.status, postingNote: false, postedNote: true}, notes: action.payload};
        case GETTING_NOTES:
            return {...state, status: {...state.status, gettingNotes: true, gotNotes: false}};
        case GOT_NOTES:
            return {...state, status: {...state.status, gettingNotes: false, gotNotes: true}, notes: action.payload};
        case GETTING_SINGLE_NOTE:
            return {...state, status: {...state.status, gettingSingleNote: true, gotSingleNote: false}};
        case GOT_SINGLE_NOTE:
            // TODO: determine if more state is required for the payload, then update accordingly
            return {...state, status: {...state.status, gettingSingleNote: false, gotSingleNote: true}}
        case PUTTING_NOTE:
            return {...state, status: {...state.status, puttingNote: true, putNote: false}};
        case PUT_NOTE:
            return {...state, status: {...state.status, puttingNote: false, putNote: true}, notes: action.payload};
        case DELETE_PROMPT:
            return {...state, status: {...state.status, deletePrompt: true}};
        case DELETING_NOTE:
            return {...state, status: {...state.status, deletingNote: true, deletedNote: false}};
        case DELETED_NOTE:
            return {...state, status: {...state.status, deletingNote: false, deletedNote: true, deletePrompt: false}, notes: action.payload};
        default:
            return state;
    }
};
