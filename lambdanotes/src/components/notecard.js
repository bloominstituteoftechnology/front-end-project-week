import React from 'react'

export default function Notecard(props) {
  return (
    <div>
      <h3 className='noteTitle'>{props.title}</h3>
      <p className='noteContent'>{props.content}</p>
    </div>
  )
}
