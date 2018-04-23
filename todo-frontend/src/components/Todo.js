import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => (<div className='Todo'>
  <h3 className='Todo--title'>{props.title}</h3>
  <p className='Todo--content'>{props.content}</p>
</div>)

Todo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export { Todo }
