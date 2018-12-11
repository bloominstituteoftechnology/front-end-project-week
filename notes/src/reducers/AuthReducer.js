import { 
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_LOGOUT
} from '../actions';

const defaultState = {
    authenticated: false,
    loading: false,
    exp: null,
    iat: null,
    roles: [],
    username: '',
    error: null,
}

export default (state = defaultState, action) => {
    switch(action.type) {

        case AUTH_LOGIN :
            return {
                ...state,
                loading: true
            }

        case AUTH_LOGIN_SUCCESS :
            return {
                ...state,
                ...action.payload,
                authenticated: true,
                loading: false,
                error: null,
            }

        case AUTH_LOGIN_FAILURE :
            return {
                ...defaultState, 
                ...action.payload,
                authenticated: false,
                loading: false
            }

        case AUTH_REGISTER :
            return {
                ...state,
                loading: true
            }

        case AUTH_REGISTER_SUCCESS :
            return {
                ...state, 
                ...action.payload,
                authenticated: true,
                loading: false,
                erro: null,
            }

        case AUTH_REGISTER_FAILURE :
            return {
                ...defaultState, 
                ...action.payload,
                authenticated: false,
                loading: false
            }

        case AUTH_LOGOUT:
            return {...defaultState}
        

        default : return {...state};
    }
}