import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchData = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
                dispatch({ type: SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FAILURE, payload: error })
            })
    }
    
}