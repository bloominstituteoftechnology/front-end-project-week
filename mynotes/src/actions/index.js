import axios from "axios";

export const DELETE_NOTE = "DELETE_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";

export const EDIT_NOTE = "EDIT_NOTE";
export const EDITING_NOTE = "EDITING_NOTE";

export const CREATE_NOTE = "CREATE_NOTE";
export const CREATING_NOTE = "CREATING_NOTE";

export const FETCH_NOTE = "FETCH_NOTE";
export const FETCHING_NOTE = "FETCHING_NOTE";

export const FETCH_NOTE_ID = "FETCH_NOTE_ID";
export const FETCHING_NOTE_ID = "FETCHING_NOTE_ID";

export const ERROR = "ERROR";

export const fetchNotes = () => {
  return dispatch => {
    // dispatch({ type: FETCHING_NOTE });
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(({ data }) => {
        dispatch({ type: FETCH_NOTE, payload: data });
      })
      .catch(err => {
        console.log("Error with fetching all notes actions: ", err);
        dispatch({ type: ERROR, err: err });
      });
  };
};

export const fetchNoteId = id => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTE_ID });
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(res => {
        dispatch({ type: FETCH_NOTE_ID, payload: res.data });
      })
      .catch(err => {
        console.log("Error with fetching id: ", err);
        dispatch({ type: err });
      });
  };
};

// export const deleteNote = id => {
//   // const del = axios.delete("https://killer-notes.herokuapp.com/note/delete/id");
//   return {
//     type: DELETE_NOTE,
//     payload: id
//   };
// };

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        dispatch({ type: DELETE_NOTE });
      })
      .catch(err => {
        console.log("Error with delete action: ", err);
        dispatch({ type: ERROR, err: err });
      });
  };
};

// export const editNote = noteData => {
//   // const edit = axios.put("https://killer-notes.herokuapp.com/note/edit/id");
//   return {
//     type: EDIT_NOTE,
//     payload: noteData
//   };
// };

export const editNote = noteData => {
  return dispatch => {
    dispatch({ type: EDITING_NOTE });
    axios
      .put(
        `https://killer-notes.herokuapp.com/note/edit/${noteData._id}`,
        noteData
      )
      .then(res => {
        dispatch({ type: EDIT_NOTE });
      })
      .catch(err => {
        console.log("Error with edit action: ", err);
        dispatch({ type: ERROR });
      });
  };
};

// export const createNote = noteData => {
//   // const create = axios.post("https://killer-notes.herokuapp.com/note/create");
//   return {
//     type: CREATE_NOTE,
//     payload: noteData
//   };
// };

export const createNote = noteData => {
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, noteData)
      .then(res => {
        dispatch({ type: CREATE_NOTE, payload: noteData });
      })
      .catch(err => {
        console.log("Error with create action: ", err);
        dispatch({ type: ERROR });
      });
  };
};

//===============================================================================================================================//

// export const fetchNote = noteData => {
//   const fetch = axios.get("https://killer-notes.herokuapp.com/note/get/all");
//   return dispatch => {
//     dispatch({ type: FETCHING_NOTE });
//     fetch
//       .then(response => {
//         dispatch({ type: FETCH_NOTE, payload: response.data });
//       })
//       .catch(err => {
//         console.log("Errror with fetch action: ", err);
//         dispatch({ type: ERROR, payload: "Error with fetch note" });
//       });
//   };
// };

// export const fetchNoteId = noteData => {
//   const fetchId = axios.get("https://killer-notes.herokuapp.com/note/get/id");
//   return dispatch => {
//     dispatch({ type: FETCHING_NOTE_ID });
//     fetchId
//       .then(response => {
//         dispatch({ type: FETCH_NOTE_ID, payload: response.data });
//       })
//       .catch(err => {
//         console.log("Error with fetch ID action: ", err);
//         dispatch({ type: ERROR, payload: "Error with fetc ID note" });
//       });
//   };
// };
