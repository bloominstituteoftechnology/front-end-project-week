
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const CHECK_UPDATE = 'CHECK_UPDATE';
export const ADD_TAG = 'ADD_TAG'
export const REORDER_STATE = 'REORDER_STATE';
let notes = [];
let titles = [];
 export const addNote = (note) => {
     return {
         type: ADD_NOTE,
         payload: note
     }
 };
 export const updateNote = (noteTitle, noteContent, i) => {
    return {
        type: UPDATE_NOTE,
        title: noteTitle,
        payload: noteContent,
        index: i
    }
};
export const addTag = (tag, i) => {
    console.log('Inside addTag action... tag, i:',tag,i);
    return {
        type: ADD_TAG,
        payload: tag,
        index: i
    }
}
export const reorderState = (completeObject) => {
    return {
        type: REORDER_STATE,
        payload: completeObject
    }
}
export const checkUpdate = (bool, i) => {
    return {
        type: CHECK_UPDATE,
        payload: bool,
        index: i
    }
}
 export const deleteNote = (note) => {
     return {
         type: DELETE_NOTE,
         payload: note
     }
 }