export const 
    LOGIN       =   `LOGIN`,
    LOGOUT      =   `LOGOUT`,
    SIGNUP      =   `SIGNUP`;

export const login = (loginDetails = {}, auth_status = false) => {
    // do the checks here and login the user
    // we will manually do it here
    auth_status = true;
    return {
        type: LOGIN,
        login: auth_status,
    }
};

export const signup = newUser => {
    console.log(newUser)
    return {
        type: SIGNUP, // add more later
        signup: true
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
}


