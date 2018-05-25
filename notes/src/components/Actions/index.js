import { notesRef, authRef, provider } from '../config/firebase'

export const FETCH_NOTES = 'FETCH_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const FETCH_USER = 'FETCH_USER'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const ERROR = 'ERROR'

export const addNote = (uid, id, newNote) => async dispatch => {
    notesRef(uid).child(id).set(newNote)
};

export const deleteNote = (uid, key) => async disptach => {
    notesRef(uid).child(key).remove()
    fetchNotes(uid)
}

// export function fetchNotes(uid) {
//     // console.log("action fired!", uid)
//     return dispatch => {
//         notesRef(uid).on("value", snapshot => {

//             // Turn the received object into a corresponding array for ease of use

//             dispatch({
//                 type: FETCH_NOTES,
//                 payload: snapshot.val()
//             })
//         })
//     }
// }

// export const fetchNotes = (uid) => dispatch => {

//     notesRef(uid).once("value")
//         .then(res => {
//             let newState = []
//             if (res.val() === null) {
//             } else if (res.val().length === undefined) {
//                 for (let key in res.val()) {
//                     newState.push({ key: key, title: res.val()[key].title, text: res.val()[key].text, id: key })
//                 }
//             }
//             dispatch({
//                 type: FETCH_NOTES,
//                 payload: newState,
//             })
//         })
// }

export const fetchNotes = (uid) => dispatch => {
    notesRef(uid).once("value")
        .then(res => dispatch({
            type: FETCH_NOTES,
            payload: res.val(),
        }))
        .catch(err => dispatch({
            type: ERROR,
            payload: `FETCH: ${err}`,
        }))
};


export const editNote = (uid, id, newNote) => async dispatch => {
    notesRef(uid).child(id).set(newNote)
}

// Fetches the user and either logs them in or sets our authState to null

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        console.log("fetchUser fired")
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            })

        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

// opens a google-popup and prompts the user to login
export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: LOG_IN,
                payload: result
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            dispatch({
                type: LOG_OUT,
                payload: null
            })
        })
        .catch(error => {
            console.log(error);
        });
};