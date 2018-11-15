import React from 'react'

export default notecard = props => {
  return (
    <div>
      <h3 className='noteTitle'>{props.title}</h3>
      <p className='noteContent'>{props.content}</p>
    </div>
  )
}
