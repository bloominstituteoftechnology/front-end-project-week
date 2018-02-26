export const ADD_BUTTON_CLICK = 'ADD_BUTTON_CLICK';
export const VIEW_BUTTON_CLICK = 'VIEW_BUTTON_CLICK';
export const ADD_NOTE = 'ADD_NOTE';

export const add_button_click = () => {
  const payload = 'create-note';
  return {
    type: 'ADD_BUTTON_CLICK',
    payload: payload,
  };
};

export const view_button_click = () => {
  const payload = 'list';
  return {
    type: 'ADD_BUTTON_CLICK',
    payload: payload,
  };
};

let id = 9;
export const add_note = (note) => {
  const payload = {...note, id:id++}
  return {
    type: 'ADD_NOTE',
    payload: payload,
  }
}
