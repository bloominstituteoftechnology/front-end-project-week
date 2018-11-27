import React from 'react'

const Note = props => {
  return (
    <div>
      <section>
       <span>{props.title}</span>
       {props.textBody}
      </section>
    </div>
  )
}

export default Note
