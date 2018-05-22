//Here is my local useful snippets repository. 
//using ToDo list for reference for the majority of this reference code.

//NoteCard reactstrap 

import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
    return (
    <Row>
        <Col sm="6">
        <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
        </Card>
        </Col>
        <Col sm="6">
        <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
        </Card>
        </Col>
    </Row>
    );
};

export default Example;



//Pretty sure I need to wrap the app like this example, on the index.js file.

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)


//Actions template

let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})


//App template

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
    </div>
)

export default App


//Link.js template

import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
    if (active) {
    return <span>{children}</span>
    }

    return (
    <a href="#" onClick={e => { // eslint-disable-line jsx-a11y/href-no-hash
        e.preventDefault()
        onClick()
    }}>
        {children}
    </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link


//Note Template

import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
    onClick={onClick}
    style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}
    >
    {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo


//NoteList template

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
    {todos.map(todo =>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        />
    )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList


//Nav (maybe?) template

import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
        All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
        Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
        Completed
    </FilterLink>
    </p>
)

export default Footer


//Add Note Template

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (
    <div>
        <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value))
        input.value = ''
        }}>
        <input ref={node => {
            input = node
        }} />
        <button type="submit">
            Add Todo
        </button>
        </form>
    </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo


//Filterlink.js (may be unneccessary but, may be useful, saving JIC)

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink


//Undo_Redo functionality template (not required but, it just seems like it would be cool.)

import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
    <button onClick={onUndo} disabled={!canUndo}>
        Undo
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
        Redo
    </button>
    </p>
)

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo


//Visible Notes List (again not necessary, but may look cool later on during styling)

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case 'SHOW_ALL':
        return todos
    case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
    onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList


//Reducers template index

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp


//Notes template

import undoable, { includeAction } from 'redux-undo'

const todo = (state, action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return {
        id: action.id,
        text: action.text,
        completed: false
        }
    case 'TOGGLE_TODO':
        if (state.id !== action.id) {
        return state
        }

        return {
        ...state,
        completed: !state.completed
        }
    default:
        return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [
        ...state,
        todo(undefined, action)
        ]
    case 'TOGGLE_TODO':
        return state.map(t =>
        todo(t, action)
        )
    default:
        return state
    }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) })

export default undoableTodos


//Visibility filter template (probably going to ommit)

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
        return action.filter
        default:
        return state
    }
    }
    
    export default visibilityFilter
    