import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Todo } from 'components/Todo'
import { AddTodoForm } from 'components/AddTodoForm'

const ListContainer = Styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px;
  background-color: rgb(242,243,242);
`

/** @type React.StatelessComponent<{todos}> */
export const TodoList = ({ todos }) => (
  <ListContainer>
    <AddTodoForm />
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </ListContainer>
)

TodoList.propTypes = {
  todos: PropTypes.array
}
