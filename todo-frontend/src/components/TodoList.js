import React from 'react'
import PropTypes from 'prop-types'
import { Todo } from 'components/Todo'

/** @type React.StatelessComponent<{todos}> */
export const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array
}
