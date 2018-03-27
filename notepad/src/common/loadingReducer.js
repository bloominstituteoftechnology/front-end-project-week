// not shown [show] shown [hide] not shown
import { SHOW_LOADING, HIDE_LOADING } from './loadingActions';

export default (isLoading = true, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return isLoading;
  }
};
