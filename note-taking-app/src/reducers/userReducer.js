import { 
    GET_AUTH_STATE
} from '../actions'

const initialState = {
    isSignedIn: false,
    user:{}
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_AUTH_STATE:
            return {
                isSignedIn: action.isSignedIn,
                user: action.user
            }
        default:
            return state
    }
}