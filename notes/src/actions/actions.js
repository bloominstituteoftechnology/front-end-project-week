import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ON_HANDLE_SUBMIT = 'ON_HANDLE_SUBMIT';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';
export const FILTER_TODOS = 'FILTER_TODOS';
export const SORT_TODOS = 'SORT_TODOS';
export const EXPORT_TODOS = 'EXPORT_TODOS';

function dynamicSort(property) {
    const sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

export const fetch_todos = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios 
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onHandleSubmit = (newTodo) => dispatch => {
    dispatch({ type: ON_HANDLE_SUBMIT })
    // console.log('new todo from on handle', newTodo)
    axios
        .post('https://fe-notes.herokuapp.com/note/create', newTodo)
        .then(response => {
            // console.log('response onhand', response.data.success)
            axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(newResponse => {
                // console.log('from new response...', newResponse.data)
                dispatch({ type: FETCH_SUCCESS, payload: newResponse.data })
            })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onUpdateTodos = (myTodos) => dispatch => {
    dispatch({ type: UPDATE_TODOS })
    axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${myTodos.id}`, myTodos)
        .then(response => {
            axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(updateResponse => {
                dispatch({ type: FETCH_SUCCESS, payload: updateResponse.data })
            })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onDeleteTodos = (deleteTodos) => dispatch => {
    dispatch({ type: DELETE_TODOS })
    // console.log('onDeleteTodos props..', deleteTodos.id)
    axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${deleteTodos.id}`, deleteTodos)
        .then(response => {
            // console.log('from delete todos', response)
            axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(deleteResponse => {
                // console.log('deleteResponse', deleteResponse)
                dispatch({ type: FETCH_SUCCESS, payload: deleteResponse.data })
            }) 
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onFilterTodos = (filterInput) => dispatch => {
    dispatch({ type: FILTER_TODOS });
    console.log('filter todos called', filterInput)
    axios 
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            // console.log('response from filter', response)
            dispatch({ type: FETCH_SUCCESS, 
                payload: response.data.filter(
                    e => e.title.includes(filterInput)
                )
            })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onSortTodos = () => dispatch => {
    dispatch({ type: SORT_TODOS });
    axios 
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            console.log('response from sort', response.data)
            dispatch({ type: FETCH_SUCCESS,
                payload: response.data.sort(dynamicSort("title"))
            })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};

export const onExportCSV = (stateExportData) => dispatch => {
    dispatch({ type: EXPORT_TODOS });
    console.log('export todos called', stateExportData)
    axios 
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
            console.log('from export response =', response)
            dispatch({ type: FETCH_SUCCESS, payload: response.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};