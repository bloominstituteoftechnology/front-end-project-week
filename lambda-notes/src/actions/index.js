import { exec } from "child_process";
import { ECONNREFUSED } from "constants";

import axios from "axios";

export const FETCHING_ITEMS = "FETCHING_ITEMS";
export const FETCHED_ITEMS = "FETCHED_ITEM";
export const ADDING_ITEM = "ADDING_ITEM";
export const ADDED_ITEM = "ADDED_ITEM";
export const UPDATING_ITEM = "UPDATING_ITEM";
export const UPDATED_ITEM = "UPDATED_ITEM";
export const DELETING_ITEM = "DELETING_ITEM";
export const DELETED_ITEM = "DELETED_ITEM";
export const ERROR = "ERROR";

const URL = "http://localhost:7777/data";
const errorAction = {
  type: ERROR,
  message: error.message
}

export const fetchingItems = () => {
  const fetch = axios.get(URL);
  return dispatch => {
    dispatch({
      type: FETCHING_ITEMS
    });
    fetch
      .then(response => {
        // console.log("response.data", response.data);
        dispatch({
          type: FETCHED_ITEMS,
          data: response.data
        });
      })
      .catch(e => {
        // console.log("error", e);
        dispatch( errorAction );
      });
  };
};
export const addingItem = newItem => {
  // console.log(newItem);
  const addItem = axios.post(URL, newItem);
  return dispatch => {
    dispatch({
      type: ADDING_ITEM,
      newItem: newItem
    });
    addItem
      .then(response => {
        console.log("POST response.data", response.data);
        console.log("newItem",newItem);
        dispatch({
          type: ADDED_ITEM,
          newItem: response.data
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
export const updatingItem = id => {
  const updateItem = axios.put(`${URL}/${id}`);
  return dispatch => {
    dispatch({
      type: UPDATING_ITEM,
      toUpdate: toUpdate
    });
    updateItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: UPDATED_ITEM,
          toUpdate: toUpdate
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
export const deletingItem = id => {
  const deleteItem = axios.delete(`${URL}/${id}`);
  return dispatch => {
    dispatch({
      type: DELETING_ITEM,
      toDelete: toDelete
    });
    deleteItem
      .then(response => {
        console.log("DELETE response.data", response.data);
        dispatch({
          type: DELETED_ITEM,
          toDelete: response.data
        });
        fetchingItems();
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
