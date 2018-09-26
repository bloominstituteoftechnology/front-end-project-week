import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING_NOTE = "SAVING_NOTE";
export const  NOTE_SAVED = "NOTE_SAVED";
export const FETCHED_SINGLE_NOTE = "FETCHED_SINGLE_NOTE";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const NOTE_EDITED = "NOTE_EDITED";
export const  EDITING_NOTE = " EDITING_NOTE";
export const FETCHING_CREATE_PAGE = "FETCHING_CREATE_PAGE";

export const fetchingNotesAction = () => {
	const request = axios.get('https://lambdanotesproject.herokuapp.com/api/notes');

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


export const fetchingSingleNote = (id) => {
        const request = axios.get(`http://localhost:5000/api/notes/${id}`);

        return (dispatch) => {
        dispatch({type: FETCHING});

        request.then(response => {
    	dispatch({type: FETCHED_SINGLE_NOTE, note: response.data});
	})

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};


export const searchAction = (search) =>{
	const request = axios.get(`http://localhost:5000/api/notes/search/${search}`);

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




export const fetchingCreatePage = () => {
	return (dispatch) => {
        dispatch({type: FETCHING_CREATE_PAGE});
}
}



export const addNotesAction = (title, content) => {
	const note= {title: title, content: content};
        const request = axios.post('http://localhost:5000/api/notes', note);

        return (dispatch) => {
        dispatch({type: SAVING_NOTE});

        request.then(response => {
        dispatch({type: NOTE_SAVED, id: response.data});
    })
		

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};

export const editNoteAction = (id, title, content) => {
        const note= {title: title, content: content};
        const request = axios.put(`http://localhost:5000/api/notes/${id}`, note);

        return (dispatch) => {
        dispatch({type: EDITING_NOTE});

        request.then(response => {
        dispatch({type: NOTE_EDITED, note: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};



export const deleteNoteAction = (noteIdr) => {
	 //const noteId= {_id:noteIdr};
	const id = noteIdr;
        const request = axios.delete(`http://localhost:5000/api/notes/${id}`);

        return (dispatch) => {
        dispatch({type: DELETING});

        request.then(response => {
        dispatch({type: DELETED, note: response.data});
    })

        .catch(err => {
        dispatch({type: ERROR, error: err});

    });
  };
};
