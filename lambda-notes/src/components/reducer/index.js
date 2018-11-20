import { LOADING, SUCCESS, FAILURE } from '../actions'

const initialState = {
        notes: [],
        loding: false,
        loadingMsg: null,
        error: null
}

export default (state = initialState,  action ) => {
  switch (action.type) {

  case LOADING:
    return { ...state, loading: true, loadingMsg:[action.payload] }

    case SUCCESS:
        return {...state, notes:[...action.payload], loading:false}

    case FAILURE:
        return {...state, error:[action.payload]}

  default:
    return state
  }
}
