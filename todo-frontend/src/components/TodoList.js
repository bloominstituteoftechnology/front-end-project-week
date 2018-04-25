import React from 'react'
import { Todo } from 'components/Todo'
import { AddTodoForm } from 'components/AddTodoForm'

export const TodoList = ({ todos }) => (
  <div className="TodoList">
    <AddTodoForm />
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </div>
)
