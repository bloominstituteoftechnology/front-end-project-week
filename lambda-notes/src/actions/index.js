import axios from 'axios';

export const FETCHING_ITEMS = 'FETCHING_ITEMS';
export const FETCHED_ITEMS = 'FETCHED_ITEM';
export const ADDING_ITEM = 'ADDING_ITEM';
export const ADDED_ITEM = 'ADDED_ITEM';
export const UPDATING_ITEM = 'UPDATING_ITEM';
export const UPDATED_ITEM = 'UPDATED_ITEM';
export const DELETING_ITEM = 'DELETING_ITEM';
export const DELETED_ITEM = 'DELETED_ITEM';
export const ERROR = 'ERROR';

const URL = 'https://jesuarva-lambda-notes.herokuapp.com/api/notes';
const errorAction = error => {
  return {
    type: ERROR,
    message: error.message,
  };
};

export const fetchingItems = () => {
  const fetch = axios.get(URL);
  return dispatch => {
    dispatch({
      type: FETCHING_ITEMS,
    });
    fetch
      .then(response => {
        console.log('response.data', response.data);
        dispatch({
          type: FETCHED_ITEMS,
          data: response.data['Document(s) in database'],
        });
      })
      .catch(e => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
export const addingItem = newItem => {
  // console.log(newItem);
  const addItem = axios.post(URL, newItem);
  return dispatch => {
    dispatch({
      type: ADDING_ITEM,
      newItem: newItem,
    });
    addItem
      .then(response => {
        // console.log("POST response.data", response.data);
        // console.log("newItem", newItem);
        dispatch({
          type: ADDED_ITEM,
          allItems: response.data,
          newItem: newItem, //TO REVIEW WITH REAL EXAMPLES
        });
      })
      .catch(e => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
export const updatingItem = (index, id, content) => {
  console.log('PUT', index, id, content);
  const updateItem = axios.put(`${URL}/${id}`, content);
  return dispatch => {
    dispatch({
      type: UPDATING_ITEM,
      toUpdate: id,
      content,
    });
    updateItem
      .then(response => {
        // console.log("response.data", response.data);
        dispatch({
          type: UPDATED_ITEM,
          index,
          content: { ...content, id }, // Previous code missed the id in the 'content' note -> this make imposible to update one more time the same note. In teh server side there were no problem but in Redux, because of how it is implemented the state update, the note get updates with out id.
          allItems: response.data, //
        });
      })
      .catch(e => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
export const deletingItem = (index, id) => {
  const deleteItem = axios.delete(`${URL}/${id}`);
  return dispatch => {
    dispatch({
      type: DELETING_ITEM,
      index,
      id,
    });
    deleteItem
      .then(response => {
        console.log('DELETE response.data', response.data);
        dispatch({
          type: DELETED_ITEM,
          allItems: response.data,
          index,
          id,
        });
      })
      .catch(e => {
        console.log('error', e);
        dispatch(errorAction(e));
      });
  };
};
