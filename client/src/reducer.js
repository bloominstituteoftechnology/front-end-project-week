import { REQUEST_ALL_NOTES, RECEIVE_ALL_NOTES, ERROR } from './components/actions/index';

const defaultState = {
  isFetching: false,
  notes: []
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_NOTES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_ALL_NOTES:
      return Object.assign({}, state, {isFetching: false, notes: action.notes})
    default:
      return state;
  }
}
