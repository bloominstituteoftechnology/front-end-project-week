import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Todo } from 'components/Todo'

const ListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5%;
`

/** @type React.StatelessComponent<{todos}> */
export const TodoList = ({ todos }) => (
  <ListContainer>
    {todos.map(todo => <Todo {...todo} key={todo.id} />)}
  </ListContainer>
)

TodoList.propTypes = {
  todos: PropTypes.array
}
