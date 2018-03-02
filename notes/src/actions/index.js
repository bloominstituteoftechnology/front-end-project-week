import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const FETCHING = 'FETCHING';
export const ERROR_GETTING_NOTES = 'ERROR_GETTING_NOTES';
export const SET_SINGLE_NOTE = 'SET_SINGLE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SEARCH = 'SEARCH';
export const RETRIEVING_SEARCH = 'RETRIEVING_SEARCH';

export const search = (criteria, status) => {

    // Handle when user deletes input and gets to 0
    if(criteria.length == 0){
        return dispatch => {
            dispatch({type: SEARCH, payload: [], search:status });
        };
    }

    const searchResponse = axios.post(`http://localhost:3333/notes/search/${criteria}`, {
        criteria:criteria,
    });

    return dispatch => {
        dispatch({type: RETRIEVING_SEARCH, retrieving_search:true });
        searchResponse
            .then(({data: response}) => {

                // Handle when the search found nothing.
                if(response === null){
                    dispatch({type: SEARCH, payload: [], search:status });
                    dispatch({type: RETRIEVING_SEARCH, retrieving_search:false });
                }else{

                    const respKeys = Object.keys(response);
                    const responseData = Object.entries(response).map((note, i) => {
                        note[1].key = respKeys[i];
                        return note[1];
                    });

                    dispatch({type: SEARCH, payload: responseData, search:status, retrievingSearch:false });
                }

            })
            .catch(err => {
                // dispatch({type: SEARCH,  search:true });
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };

};

export const getNotes = () => {
    const notes = axios.get('http://localhost:3333/notes/');

    return dispatch => {
        dispatch({type: FETCHING, fetching: true});
        notes
            .then(response => {
                const respKeys = Object.keys(response.data);
                const responseData = Object.entries(response.data).map((note, i) => {
                    note[1].key = respKeys[i];
                    return note[1];
                });
                
                responseData.reverse();
                dispatch({type: GET_NOTES, payload: responseData});
                dispatch({type: FETCHING, fetching: false});
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};

export const addNote = (note) => {
    const newNote = axios.post('http://localhost:3333/notes', {
        title:note.title,
        description:note.description,
        tags:note.tags,
    });
    return dispatch => {
        newNote
            .then(({data}) => {
                dispatch({type: ADD_NOTES, payload: data});
                window.location = "/";
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};

export const getSingleNote = (note) => {
    return dispatch => {
        dispatch({type: SET_SINGLE_NOTE, payload:note });
    };
};

export const deleteNote = (noteKey) => {
    const key = noteKey;

    console.log('ready to delte key ', noteKey);
    const newNotes = axios.delete(`http://localhost:3333/notes/delete/${key}`, {
        key: key,
    });
    return dispatch => {
        newNotes
            .then(() => {
                window.location = "/";
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};

export const updateNote = (noteObj) => {

    const key = noteObj.key;
    const newNotes = axios.put(`http://localhost:3333/notes/update/${key}`, {
        key:key,
        noteObj,
    });
    return dispatch => {
        newNotes
            .then(({data}) => {
                dispatch({type: UPDATE_NOTE, payload: data});
                window.location = "/";
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};




