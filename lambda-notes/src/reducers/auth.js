import { SIGNING_IN, SIGNED_IN, CHECKING_TOKEN, TOKEN_CHECKED, SET_SIGNIN, ERROR } from '../actions/auth';

const initialState = {
    signingIn: false,
    signedIn: false,
    checkingToken: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNING_IN:
            return { ...state, signingIn: true };

        case SIGNED_IN:
            return { ...state, signedIn: true };

        case CHECKING_TOKEN:
            return { ...state, checkingToken: true };

        case TOKEN_CHECKED:
            return { ...state, signedIn: true };

        case SET_SIGNIN:
            return { ...state, signedIn: false };

        case ERROR:
            return { ...state, error: action.payload, signingIn: false, signedIn: false }

        default:
            return state
    }
}