import axios from "axios";

export const USERS_FETCHING = "USERS_FETCHING",
    USERS_FETCHED = "USERS_FETCHED",
    USERS_ADDING = "USERS_ADDING",
    USERS_ADDED = "USERS_ADDED",
    USERS_DELETING = "USERS_DELETING",
    USERS_DELETED = "USERS_DELETED",
    USERS_UPDATING = "USERS_UPDATING",
    USERS_UPDATED = "USERS_UPDATED",
    USERS_ERROR = "USERS_ERROR",
    LOGGING_IN = "LOGGING_IN",
    LOGGED_IN = "LOGGED_IN",
    LOGIN_STATUS = "LOGIN_STATUS",
    LOGIN_ERROR = "LOGIN_ERROR",
    LOG_OUT = "LOG_OUT",
    URL = "https://lambdabackendproject.herokuapp.com/api/users",
    TEST_URL = "http://localhost:5000/api/users";

export const login = user => dispatch => {
    dispatch({ type: LOGGING_IN });

    axios
        .post(`${URL}/login`, user)
        .then(response => {
            dispatch({
                type: LOGGED_IN,
                user: response.data,
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                errorMessage: `Could not edit the user ${err}.`,
            });
        });
};

export const logout = user => dispatch => {
    dispatch({ type: LOG_OUT });
};

export const loginStatus = user => dispatch => {
    dispatch({ type: LOGIN_STATUS });
};

export const getUsers = () => dispatch => {
    dispatch({
        type: USERS_FETCHING,
        msg: "Fetching notes...",
    });

    axios
        .get(`${URL}/users`)
        .then(response => {
            console.log("+++56", response.data);
            dispatch({
                type: USERS_FETCHED,
                users: response.data,
            });
        })
        .catch(err => {
            dispatch({
                type: USERS_ERROR,
                errorMessage: `Could not retrieve users! ${err}.`,
            });
        });
};

export const addUser = newUser => dispatch => {
    dispatch({ type: USERS_ADDING });

    axios
        .post(URL, newUser)
        .then(response => {
            dispatch({
                type: USERS_ADDED,
                user: response.data,
            });
        })
        .catch(err => {
            dispatch({
                type: USERS_ERROR,
                errorMessage: `Could not add user ${err}.`,
            });
        });
};

// export const deleteUser = id => dispatch => {
//     dispatch({ type: USERS_DELETING });

//     axios
//         .delete(`lambdabackendproject.herokuapp.com/api/users/${id}`)
//         .then(response => {
//             dispatch({
//                 type: USERS_DELETED,
//                 user: response.data,
//             });
//         })
//         .catch(err => {
//             dispatch({
//                 type: USERS_ERROR,
//                 errorMessage: `Could not delete User ${err}.`,
//             });
//         });
// };

// export const editUser = (id, user) => dispatch => {
//     dispatch({ type: USERS_UPDATING });

//     axios
//         .put(`lambdabackendproject.herokuapp.com/api/users/${id}`, user)
//         .then(response => {
//             console.log("action", response);
//             dispatch({
//                 type: USERS_UPDATED,
//                 user: response.data,
//             });
//         })
//         .catch(err => {
//             dispatch({
//                 type: USERS_ERROR,
//                 errorMessage: `Could not edit the user ${err}.`,
//             });
//         });
// };
