export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTE = "VIEW_NOTE";
export const VIEW_NOTES = "VIEW_NOTES";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (note) => {
    return dispatch => {
        fetch("http://localhost:5000/notes/new", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(note)
            })
            .then(response => response.json())
            .then(note => {
                dispatch({
                    type: ADD_NOTE,
                    payload: note
                })
            })
    }
}

export const viewNotes = () => {
    return dispatch => {
        fetch("http://localhost:5000/notes")
            .then(response => {
                return response.json()
            })
            .then(notes => {
                dispatch({
                    type: VIEW_NOTES,
                    payload: notes
                })
            })
    }
}

export const editNote = (note, id, index) => {
    return dispatch => {
        fetch(`http://localhost:5000/notes/edit/${id}`, {
                method: "PUT",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(note)
            })
            .then(response => response.json())
            .then(note => {
                dispatch({
                    type: EDIT_NOTE,
                    payload: { note, index }
                })
            })
    }
}

export const deleteNote = (id, index) => {
    return dispatch => {
        fetch(`http://localhost:5000/notes/delete/${id}`, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
            .then(() => {
                dispatch({
                    type: DELETE_NOTE,
                    payload: { index }
                })
            })
    }
}