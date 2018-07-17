import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING_NOTE = "SAVING_NOTE";
export const  NOTE_SAVED = "NOTE_SAVED";


export const fetchingNotesAction = () => {
	const request = axios.get('https://killer-notes.herokuapp.com/note/get/all');

        return (dispatch) => {
        dispatch({type: FETCHING});

        request.then(response => {
        dispatch({type: FETCHED, notes: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};

	
export const addNotesAction = (title, content) => {
	const note= {title: title, textBody: content};
        const request = axios.post('https://killer-notes.herokuapp.com/note/create', note);

        return (dispatch) => {
        dispatch({type: SAVING_NOTE});

        request.then(response => {
        dispatch({type: NOTE_SAVED, notes: response.data});
    })
		

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};


