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

export default {
    requestNote,
    receiveNote
}