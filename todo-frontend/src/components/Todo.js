import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TodoWrapper = styled.div``

const TodoTitle = styled.h3`
  padding-bottom: 2px;
  border-bottom: 1px gray solid;
`

const TodoContent = styled.p``

/** @type React.StatelessComponent<{title,content}> */
const Todo = props => (
  <TodoWrapper>
    <TodoTitle>{props.title}</TodoTitle>
    <TodoContent>{props.content}</TodoContent>
  </TodoWrapper>
)

Todo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export { Todo, TodoTitle, TodoContent }
