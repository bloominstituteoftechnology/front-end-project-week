import React from 'react'

export default (props) => {
  const { title, textBody } = props.note;
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {textBody}
      </p>
    </div>
  )
}
