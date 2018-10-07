import { connect } from "react-redux";
// filter types
import { VisibilityFilters } from "../actions/index.js";
// components
import Todos from "./Todos";

// container component that will filter todos list according to store's filter status
const getVisibleTodos = (todos, filter, target) => {
    switch (filter) {
        // no filter applied
        case "":
        case VisibilityFilters.SHOW_ALL_TODOS:
            return todos;
        // only return finished tasks (isComplete: true)
        case VisibilityFilters.SHOW_COMPLETED_TODOS:
            return todos.filter(todo => {
                return todo.isComplete;
            });
        // only return unfinished tasks (isComplete: false)
        case VisibilityFilters.SHOW_ACTIVE_TODOS:
            return todos.filter(todo => {
                return !todo.isComplete;
            });
        // only return archived tasks
        case VisibilityFilters.SHOW_ARCHIVED_TODOS:
            return todos.filter(todo => {
                return todo.archive;
            });
        // only show searched tasks
        case VisibilityFilters.SHOW_SEARCHED_TODOS:
            return todos.filter(todo => {
                return todo.text === target;
            });
        default:
            return todos;
    }
};

const mapStateToProps = state => {
    // filtered todos are set as Todo component's props
    return {
        todos: getVisibleTodos(state.todos, state.filter, state.searchText)
    };
};

const VisibilityTodos = connect(mapStateToProps)(Todos);

export default VisibilityTodos;
