import { LOADING, SUCCESS, FAILURE } from ../actions/actions

const initialState = {
        note: [],
        loding: false,
        loadingMsg: null,
        error: null
}

export default (state = initialState,  payload ) => {
  switch (action.type) {

  case LOADING:
    return { ...state, loading: true, loadingMsg:[action.payload] }

    case SUCCESS:
        return {...state, notes:[action.payload], loading:false}

    case FAILURE:
        return {...state, error:[action.payload]}

  default:
    return state
  }
}
