export const ADD_BUTTON_CLICK = 'ADD_BUTTON_CLICK';
export const VIEW_BUTTON_CLICK = 'VIEW_BUTTON_CLICK';

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
