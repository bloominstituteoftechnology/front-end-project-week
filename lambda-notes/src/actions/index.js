export const ADD_BUTTON_CLICK = 'ADD_BUTTON_CLICK';
export const VIEW_BUTTON_CLICK = 'VIEW_BUTTON_CLICK';
export const ADD_NOTE = 'ADD_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE';
export const EDIT_NOTE_CLICKED = 'EDIT_NOTE_CLICKED';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SEARCH_CLICK = 'SEARCH_CLICK';
export const SEARCH_RESULTS_CLICKED = 'SEARCH_RESULTS_CLICKED';
export const SORT_BUTTON_CLICKED = 'SORT_BUTTON_CLICKED';
export const DOWNLOAD_BUTTON_CLICKED = 'DOWNLOAD_BUTTON_CLICKED';
export const UPDATE_CHECK_LIST = 'UPDATE_CHECK_LIST';
export const REMOVE_EDIT = 'REMOVE_EDIT';


export const add_button_click = () => {
  const payload = 'create-note';
  return {
    type: 'ADD_BUTTON_CLICK',
    payload,
  };
};

export const view_button_click = () => {
  const payload = 'list';
  return {
    type: 'ADD_BUTTON_CLICK',
    payload,
  };
};

let id = 9;
export const add_note = note => {
  const payload = { ...note, id: id++ };
  return {
    type: 'ADD_NOTE',
    payload,
  };
};

export const view_note = note => {
  const payload = { note, current: 'note' };
  return {
    type: 'VIEW_NOTE',
    payload,
  };
};

export const edit_note_clicked = note => {
  const payload = { note, current: 'edit' };
  return {
    type: 'EDIT_NOTE_CLICKED',
    payload,
  };
};

export const edit_note = (revised) => {
  return {
    type: 'EDIT_NOTE',
    payload: revised,
  };
};

export const delete_note = note => {
  const payload = { note, current: 'list' };
  return {
    type: 'DELETE_NOTE',
    payload,
  };
};

export const search_button_click = () => {
  const payload = 'search';
  return {
    type: 'SEARCH_CLICK',
    payload,
  };
};

export const search_results_clicked = results => {
  const payload = { results, current: 'results' };
  return {
    type: 'SEARCH_RESULTS_CLICKED',
    payload,
  };
};

export const sort_button_click = () => {
  const payload = 'sort';
  return {
    type: 'SORT_BUTTON_CLICKED',
    payload,
  }
}

export const download_button_click = () => {
  const payload = 'download';
  return {
    type: 'DOWNLOAD_BUTTON_CLICKED',
    payload,
  }
}

export const update_check_list = (note) => {
  return {
    type: 'UPDATE_CHECK_LIST',
    payload: note,
  }
}

export const remove_edit = () => {
  return {
    type: 'REMOVE_EDIT',
    payload: true,
  }
}
