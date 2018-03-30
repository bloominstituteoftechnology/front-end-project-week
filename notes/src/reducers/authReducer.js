import { LOGIN, SIGNUP, LOGOUT } from '../actions/authActions';

export default (isAuth = false, action) => {
    switch(action.type){
        case LOGIN:
            return action.login;
        case LOGOUT:
            return false;
        case SIGNUP:
            return action.signup;
        default:
            return isAuth;
    }
}