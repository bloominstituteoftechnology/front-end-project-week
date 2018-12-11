import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const SINGLE_FETCHING = "SINGLE_FETCHING";
export const SINGLE_FETCHED = "SINGLE_FETCHED";
export const FILTER = "FILTER";
export const ERROR = "ERROR";
const host = "https://fe-notes.herokuapp.com/note";
export const local = JSON.parse(localStorage.getItem("state"));

export const fetchNotes = () => dispatch => {
  const notes = axios.get(`${host}/get/all`);
  dispatch({ type: FETCHING });
  notes
    .then(res => {
      if (local) {
        let server = res.data;
        let sorted = newSort(server, local);
        dispatch({
          type: FETCHED,
          payload: sorted
        });
      } else {
        dispatch({
          type: FETCHED,
          payload: res.data
        });
      }
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};

export const fetchSingle = id => dispatch => {
  const note = axios.get(`${host}/get/${id}`);
  dispatch({ type: SINGLE_FETCHING });
  note
    .then(res => dispatch({ type: SINGLE_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const saveNote = info => dispatch => {
  const saved = axios.post(`${host}/create`, info);
  dispatch({ type: SAVING });
  saved
    .then(res => {
      dispatch({ type: SAVED, payload: { ...info, _id: res.data.success } });
    })
    .catch(err => dispatch({ type: ERROR, paylaod: err }));
};

export const editNote = (info, id) => dispatch => {
  const updated = axios.put(`${host}/edit/${id}`, info);
  dispatch({ type: UPDATING });
  updated
    .then(res => dispatch({ type: UPDATED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const deleteNote = id => dispatch => {
  const deleted = axios.delete(`${host}/delete/${id}`);
  dispatch({ type: DELETING });
  deleted
    .then(() => dispatch({ type: DELETED, payload: id }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const filterNotes = id => {
  return {
    type: FILTER,
    payload: id
  };
};

export function newSort(server, local) {
  const result = [];
  let key;

  const uniqueToServer = server.filter(function(obj) {
    return !local.some(function(obj2) {
      return obj._id === obj2._id;
    });
  });

  let length = server.length > local.length ? local.length : server.length;
  for (let i = 0; i < length; i++) {
    if (local[i]["_id"]) {
      key = local[i]["_id"];
    }
    for (let j = 0; j < length; j++) {
      if (server[j]["_id"] === key) {
        result.push(server[j]);
      }
    }
  }
  Array.prototype.push.apply(result, uniqueToServer);
  return result;
}

export const isEqual = function(value, other) {
  var type = Object.prototype.toString.call(value);

  if (type !== Object.prototype.toString.call(other)) return false;

  if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

  var valueLen =
    type === "[object Array]" ? value.length : Object.keys(value).length;
  var otherLen =
    type === "[object Array]" ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  var compare = function(item1, item2) {
    var itemType = Object.prototype.toString.call(item1);

    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    } else {
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  if (type === "[object Array]") {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  return true;
};

export const reorder = (notes, startIndex, endIndex) => {
  const result = Array.from(notes);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
