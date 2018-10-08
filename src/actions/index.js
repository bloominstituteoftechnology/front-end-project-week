import axios from "axios";
// action types
export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const UPDATETODO = "UPDATETODO";
export const TOGGLETODO = "TOGGLETODO";
export const ARCHIVETODO = "ARCHIVETODO";
// filter types
export const VisibilityFilters = {
    SHOW_ALL_TODOS: "ALL_TODOS",
    SHOW_COMPLETED_TODOS: "COMPLETED_TODOS",
    SHOW_ACTIVE_TODOS: "ACTIVE_TODOS",
    SHOW_ARCHIVED_TODOS: "ARCHIVE_TODOS",
    SHOW_SEARCHED_TODOS: "SHOW_SEARCHED_TODOS"
};
// from node-uuid
let uuid = require("uuid-v4");

const url = process.env.REACT_APP_SERVER;

// action creators
export function addTodo(title, text) {
    return {
        type: ADDTODO,
        payload: {
            title: title,
            text: text,
            isComplete: false,
            id: uuid(),
            archive: false
        }
    };
}

export function archiveTodo(id) {
    return {
        type: ARCHIVETODO,
        payload: id
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLETODO,
        payload: id
    };
}

export function deleteTodo(id) {
    return {
        type: DELETETODO,
        payload: id
    };
}

export function updateTodo(id, title, text) {
    return {
        type: UPDATETODO,
        payload: {
            title: title,
            text: text,
            id: id
        }
    };
}

export function setVisibilityFilter(filter, text = "") {
    return {
        type: "SET_VISIBILITY_FILTER",
        payload: {
            filter,
            searchText: text
        }
    };
}
