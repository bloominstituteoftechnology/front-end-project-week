import { SIGNING_IN, SIGNED_IN, SIGNING_UP, SIGNED_UP, CHECKING_TOKEN, TOKEN_CHECKED, SET_SIGNIN, ERROR, UPDATING_ORDER, ORDER_UPDATED } from '../actions/auth';

const initialState = {
    signingIn: false,
    signedIn: false,
    signingUp: false,
    signedUp: false,
    checkingToken: false,
    updatingOrder: false,
    orderUpdated: false,
    userExists: null,
    invalidCredentials: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNING_IN:
            return { ...state, signingIn: true };

        case SIGNED_IN:
            return { ...state, signedIn: true };

        case SIGNING_UP:
            return { ...state, signingUp: true };

        case SIGNED_UP:
            return { ...state, signedUp: true, signedIn: true, signingUp: false };

        case CHECKING_TOKEN:
            return { ...state, checkingToken: true };

        case TOKEN_CHECKED:
            return { ...state, signedIn: action.payload, checkingToken: false };

        case UPDATING_ORDER:
            return { ...state, updatingOrder: true };

        case ORDER_UPDATED:
            return { ...state, orderUpdated: true, updatingOrder: false };

        case SET_SIGNIN:
            return { ...state, signedIn: false };

        case ERROR:
            switch (action.payload.response.data.error) {
                case "The username you entered doesn't belong to an account.":
                    return { ...state, error: action.payload, checkingToken: false, invalidCredentials: action.payload.response.data.error, signingIn: false, signedIn: false, signingUp: false, signedUp: false }

                case "Invalid password":
                    return { ...state, error: action.payload, checkingToken: false, invalidCredentials: action.payload.response.data.error, signingIn: false, signedIn: false, signingUp: false, signedUp: false }

                case "There is already a user with that name.":
                    return { ...state, error: action.payload, checkingToken: false, userExists: action.payload.response.data.error, signingIn: false, signedIn: false, signingUp: false, signedUp: false }

                case "Token invalid":
                    return { ...state, error: action.payload, checkingToken: false, signingIn: false, signedIn: false, signingUp: false, signedUp: false }

                default:
                    return { ...state, error: action.payload, signingIn: false, signedIn: false, signingUp: false, signedUp: false }
            }

        default:
            return state
    }
}