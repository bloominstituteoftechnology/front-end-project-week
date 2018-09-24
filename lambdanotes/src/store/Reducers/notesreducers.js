import {
    CREATING_NOTE,
    CREATED_NOTE,
    GETTING_NOTES,
    GOT_NOTES,
    EDITING_NOTE,
    EDITED_NOTE,
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
    "noteStatus": {
        "creatingNote": false,
        "createdNote": false,
        "readingNotes": false,
        "readNotes": false,
        "updatingNote": false,
        "updatedNote": false,
        "deletingNote": false,
        "deletedNote": false,
        "noteError": ""
    },
	"crudStatus": {
		"postingNote": false,
		"postedNote": false,
		"gettingNotes": false,
		"gotNotes": false,
		"puttingNote": false,
		"putNote": false,
		"deletingNote": false,
		"deletedNote": false,
		"noteError": ""
	}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case NOTE_ERROR:
            return {...state, noteStatus: {...state.noteStatus, noteError: action.payload}}
        case CREATING_NOTE:
        case CREATED_NOTE:
        case GETTING_NOTES:
        case GOT_NOTES:
        case EDITING_NOTE:
        case EDITED_NOTE:
        case DELETING_NOTE:
        case DELETED_NOTE:
        default:
            return state;
    }
};
