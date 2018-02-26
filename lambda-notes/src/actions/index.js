export const ADD_BUTTON_CLICK = 'ADD_CLICK';

export const add_button_click = () => {
  console.log("add_button_click action fired");
  const payload = 'create-note';
  return {
    type: 'ADD_BUTTON_CLICK',
    payload: payload,
  };
};
