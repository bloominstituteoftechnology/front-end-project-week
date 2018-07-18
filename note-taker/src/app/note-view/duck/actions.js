import types from './types';

const requestNote = () => {
    return {
        type: types.FETCHING_SINGLE_NOTE
    }
}

const receiveNote = (noteObj) => {
    return {
        type: types.FETCHED_SINGLE_NOTE,
        noteObj
    }
}

const deletingNote = () => {
    return {
        type: types.DELETING_SINGLE_NOTE,
    }
}
const deleteNote = () => {
    return {
        type: types.DELETE_SINGLE_NOTE,
    }
}
export default {
    requestNote,
    receiveNote,
    deletingNote,
    deleteNote,
}