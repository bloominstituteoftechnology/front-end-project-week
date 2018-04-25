import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const styles = {
  underline: '#333'
}

const TodoWrapper = Styled.div`
  background-color: white;
  color: rgb(68,68,68);
  border: 2px solid rgb(222,222,222);
`

const TodoTitle = Styled.h3`
  margin: 5px;
  display: inline-block;
  color: #000;
  padding-bottom: 2px;
  border-bottom: 1px solid ${styles.underline};
`

const TodoContent = Styled.p`
  margin: 2px;
`

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
