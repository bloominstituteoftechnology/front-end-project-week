import * as actions from '../actions';

const initialState = {
    notes = [],
}

export default (state = initialState, action) => {
  console.log('Action: ', action);
  switch (action.type) {
    default:
      return state;
  }
}