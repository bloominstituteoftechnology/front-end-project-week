import axios from 'axios';

export const FETCHING = 'FETCHING';
export const GOT_TODOS = 'GOT_TODOS';
export const ERROR = 'ERROR';

export const fetchingToDos = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.get('https://fe-notes.herokuapp.com/note/get/all')
			.then( response => {
				dispatch({
					type: GOT_TODOS,
					toDos: response.data,
				})
			})

			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble finding To Dos ...',
				})
			})
	}
}

export const addingToDo = (newToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.post('https://fe-notes.herokuapp.com/note/create', newToDo)
			.then( response => {
				dispatch({
					type: GOT_TODOS,
					toDos: response.data,
				})
			})
			
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble adding To Do.  Please try again later.',
				})
			})
	}
}

export const deleteToDo = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
			.then( response => {
				dispatch({
					type: GOT_TODOS,
					toDos: response.data,
				});
			})
  
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble deleting To Do',
				})
			})
	}
}
  
export const updateToDo = (updatedToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.put(`https://fe-notes.herokuapp.com/note/edit/${updatedToDo.id}`, updatedToDo)
			.then( response => {
				dispatch({ 
					type: GOT_TODOS,
					toDos: response.data,
				})
			})

			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: "Trouble updating Smurf",
				})
			})
	}
}