import types from './types';


const requestPost = () => {
    return {
        type: types.POSTING_NOTE
    }
}

const postCompleted = (notesData) => {
    console.log(notesData);
    return {
        type: types.POSTED_NOTE,
    }
}

export default {
    requestPost,
    postCompleted
}