import axios from 'axios';

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const POSTING = "POSTING";
export const CREATED = "CREATED";

export const fetch = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(({data})   =>  {
            dispatch({ type: SUCCESS, payload: data });
        })
        .catch(err  =>  {
            return dispatch({ type: FAILURE, payload: err })
        });
    }
}

export const createNote = (title, content)    =>  {
    return dispatch =>  {
        dispatch({ type: POSTING });
        axios.post(`https://fe-notes.herokuapp.com/note/create`, {title: title, textBody: content})
        .then(({data})    =>  {
            return dispatch({ type: CREATED, payload: data})
        })
        .then(()    =>  {
            axios.get("https://fe-notes.herokuapp.com/note/get/all")
            .then(({data})   =>  {
                dispatch({ type: SUCCESS, payload: data });
            })
            .catch(err  =>  {
                return dispatch({ type: FAILURE, payload: err })
            });
        })
        .catch(err  =>  console.log(err))
    }
}

export const updateNote = (title, content, id)  =>  {
    return dispatch =>  {
        dispatch({ type: UPDATING});
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {title: title, textBody: content})
        .then(({data})    =>  {
                return dispatch({ type: UPDATED, payload: data })
        })
        .then(()    =>  {
            axios.get("https://fe-notes.herokuapp.com/note/get/all")
            .then(({data})   =>  {
                dispatch({ type: SUCCESS, payload: data });
            })
            .catch(err  =>  {
                return dispatch({ type: FAILURE, payload: err })
            });
        })
        .catch(err  =>  console.log(err))
    }
}
