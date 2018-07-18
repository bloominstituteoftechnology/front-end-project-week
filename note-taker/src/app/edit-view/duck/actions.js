import types from './types';

const updatingNote = () => {
    return {
        type: types.UPDATING_SINGLE_NOTE
    }
}

const updatedNote = () => {
    return {
        type: types.UPDATED_SINGLE_NOTE,
    }
}

export default {
    updatingNote,
    updatedNote,
}