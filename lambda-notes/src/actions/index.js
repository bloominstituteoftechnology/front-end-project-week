export const ADD_BUTTON_CLICK = 'ADD_BUTTON_CLICK';
export const VIEW_BUTTON_CLICK = 'VIEW_BUTTON_CLICK';
export const ADD_NOTE = 'ADD_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE';
export const EDIT_NOTE_CLICKED = 'EDIT_NOTE_CLICKED';
export const EDIT_NOTE = 'EDIT_NOTE';

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

export const view_note = (note) => {
  const payload = { note, current:'note' };
  return {
    type: 'VIEW_NOTE',
    payload,
  };
};

export const edit_note_clicked = (note) => {
  const payload = {note, current: 'edit' };
  return {
    type: 'EDIT_NOTE_CLICKED',
    payload,
  }
}

export const edit_note = (updated, original) => {
  const note = {title:updated.title, body:updated.body, id:original.id, index:original.index}
  return {
    type: 'EDIT_NOTE',
    payload: note,
  }
}
