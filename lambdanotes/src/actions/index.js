import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHED_NOTES = "FETCHED_NOTES";
export const START_CREATE = "START_CREATE";
export const ERROR = "ERROR";
export const GO_TO_LIST = "GO_TO_LIST";
export const VIEW_NOTE = "VIEW_NOTE";
export const START_DELETE = "START_DELETE";
export const REALLY_DELETE = "REALLY_DELETE";
export const DONE_DELETING = "DONE_DELETING";
export const SAVE_NEW = "SAVE_NEW";
export const DONE_SAVING = "DONE_SAVING";
export const CANCEL_DELETE = "CANCEL_DELETE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SAVE_EDIT = "SAVE_EDIT";
export const ALPHABETIZE_NOTES = "ALPHABETIZE_NOTES";
export const SHORTEST_NOTES = "SHORTEST_NOTES";
export const LONGEST_NOTES = "LONGEST_NOTES";



export const fetcher = (url) => {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch({type: FETCHING_NOTES});
    request.then((data) => {
      dispatch({type: FETCHED_NOTES, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};


export const startCreate = () => {
  return (dispatch) => {
    dispatch({type: START_CREATE});
  }
}

export const goToList = () => {
  return (dispatch) => {
    dispatch({type: GO_TO_LIST});
  }
}

export const viewNote = (id) => {
  return (dispatch) => {
    dispatch({type: VIEW_NOTE, payload: id});
  }
}

export const startDelete = () => {
  return (dispatch) => {
    dispatch({type: START_DELETE});
  }
}

export const reallyDelete = (nextAct, url, id) => {
  const request = axios.delete(url + "delete/" + id);
  return (dispatch) => {
    dispatch({type: REALLY_DELETE});
    request.then((data) => {
      dispatch({type: DONE_DELETING});
      nextAct(url + "get/all");
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const saveNew = (nextAct, url, note) => {
  const request = axios.post(url + "create", note);
  return (dispatch) => {
    dispatch({type: SAVE_NEW});
    request.then((data) => {
      dispatch({type: DONE_SAVING});
      nextAct(url + "get/all");
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const cancelDelete = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_DELETE});
  }
}

export const editNote = () => {
  return (dispatch) => {
    dispatch({type: EDIT_NOTE});
  }
}

export const saveEdit = (nextAct, url, note, id) => {
  let newNote = Object.assign({}, note, {_id: id})
  const request = axios.put(url + `edit/${id}`, newNote);
  return (dispatch) => {
    dispatch({type: SAVE_EDIT});
    request.then((data) => {
      dispatch({type: DONE_SAVING});
      console.log(data);
      nextAct(url + "get/all");
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const alphabetizeNotes = () => {
  return (dispatch) => {
    dispatch({type: ALPHABETIZE_NOTES});
  }
}

export const shortestNotes = () => {
  return (dispatch) => {
    dispatch({type: SHORTEST_NOTES});
  }
}

export const longestNotes = () => {
  return (dispatch) => {
    dispatch({type: LONGEST_NOTES});
  }
}
