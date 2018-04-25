import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Todo } from 'components/Todo'

const SectionContainer = Styled.section`
  background-color: rgb(242,243,242);
  padding: 5px 20px;
`

const ListContainer = Styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 10px;
`

/** @type React.StatelessComponent<{todos}> */
export const TodoList = ({ todos }) => (
  <SectionContainer>
    <h3>Your Notes</h3>
    <ListContainer>
      {todos.map(todo => <Todo {...todo} key={todo.id} />)}
    </ListContainer>
  </SectionContainer>
)

TodoList.propTypes = {
  todos: PropTypes.array
}
