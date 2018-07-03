export const  ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';


export const addNote = () => {
    return {
        type: ADD_NOTE
    };
};

export const updateNote = data => {
    return {
        type: UPDATE_NOTE,
        payload: data,
    };
};

export const deleteNote = id => {
    return {
        type: DELETE_NOTE,
        payload: id,
    };
};

export const error = data => {
    return {
        type: ERROR,
        payload: data,
    };
};

