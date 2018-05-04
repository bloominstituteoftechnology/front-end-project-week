import {
    NOTES_FETCHING,
    NOTES_FETCHED,
    NOTES_ADDED,
    NOTES_ADDING,
    NOTES_ERROR,
    NOTES_DELETING,
    NOTES_DELETED,
    NOTES_UPDATED,
    NOTES_UPDATING,
} from "../actions/notesActions";

import {
    USERS_FETCHING,
    USERS_FETCHED,
    USERS_ADDED,
    USERS_ADDING,
    USERS_ERROR,
    USERS_DELETING,
    USERS_DELETED,
    USERS_UPDATED,
    USERS_UPDATING,
    LOGGING_IN,
    LOGGED_IN,
    LOG_OUT,
    LOGIN_STATUS,
    LOGIN_ERROR,
} from "../actions/usersActions";

const token = localStorage.getItem("token") ? localStorage.getItem("token") : false;

const initState = {
    users: [],
    user: {},
    token: token,
    loginPage: false,
    isloggedIn: false,
    isloggingIn: false,
    isFetchingUsers: false,
    loadingMsgUsers: null,
    isFetchedUsers: false,
    isAddingUsers: false,
    isUpdatingUsers: false,
    isDeletingUsers: false,
    errorUsers: null,
    notes: [],
    isFetchingNotes: false,
    loadingMsgNotes: null,
    isFetchedNotes: false,
    isAddingNotes: false,
    isUpdatingNotes: false,
    isDeletingNotes: false,
    errorNotes: null,
};
export default function noteReducer(state = initState, action) {
    switch (action.type) {
        case NOTES_FETCHING:
            return { ...state, isFetchingNotes: true, loadingMsgNotes: action.msg };
        case NOTES_FETCHED:
            return { ...state, notes: action.notes, isFetchedNotes: true, isFetchingNotes: false, loadingMsgNotes: null };
        case NOTES_ADDING:
            return { ...state, isAddingNotes: true };
        case NOTES_ADDED:
            return { ...state, isAddingNotes: false, notes: action.notes };
        case NOTES_DELETING:
            return { ...state, isDeletingNotes: true };
        case NOTES_DELETED:
            return { ...state, notes: action.notes, isDeletingNotes: false };
        case NOTES_UPDATING:
            return { ...state, isUpdatingNotes: true };
        case NOTES_UPDATED:
            return { ...state, notes: action.notes, isUpdatingNotes: false };
        case NOTES_ERROR:
            return { ...state, errorNotes: action.errorMessage, loadingMsgNotes: null };
        case USERS_FETCHING:
            return { ...state, isFetchingNotes: true, loadingMsgNotes: action.msg };
        case USERS_FETCHED:
            return { ...state, users: action.users, isFetchedUsers: true, isFetchingUsers: false, loadingMsgUsers: null };
        case LOGIN_STATUS:
            return { ...state, loginPage: true };
        case LOGGING_IN:
            return { ...state, isloggingIn: true, loadingMsgNotes: action.msg };
        case LOGGED_IN:
            localStorage.setItem("token", action.user.token);

            return { ...state, user: action.user, loginPage: false, isloggedIn: true, isloggingIn: false, loadingMsgUsers: null };
        case LOG_OUT:
            localStorage.removeItem("token");
            return { ...state, user: {}, isloggedIn: false };
        case LOGIN_ERROR:
            return { ...state, errorUsers: action.errorMessage, loadingMsgUsers: null };
        case USERS_ADDING:
            return { ...state, isAddingUsers: true };
        case USERS_ADDED:
            return { ...state, isAddingUsers: false, users: action.Users };
        case USERS_DELETING:
            return { ...state, isDeletingUsers: true };
        case USERS_DELETED:
            return { ...state, users: action.users, isDeletingUsers: false };
        case USERS_UPDATING:
            return { ...state, isUpdatingUsers: true };
        case USERS_UPDATED:
            return { ...state, users: action.users, isUpdatingUsers: false };
        case USERS_ERROR:
            return { ...state, errorUsers: action.errorMessage, loadingMsgUsers: null };
        default:
            return state;
    }
}
