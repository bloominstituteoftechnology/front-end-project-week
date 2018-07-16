import React from 'react'
import { Link } from 'react-router-dom'

const NoteCard = (props) => {
  return (
    <div className='noteCard'>
      <Link key={props.id} to={`${props.id}`}>
        <h1 className='cardTitle'>{props.title}</h1>
        <p>{props.textBody}</p>
      </Link>
    </div>
  )
}
export default NoteCard
