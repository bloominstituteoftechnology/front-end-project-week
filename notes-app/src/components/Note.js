import React from 'react';

const Note = props => {
  return (
    <div className='Note'>
      <div>{props.title}</div>
      <div>{props.textBody}</div>
    </div>
  )
}

Note.defaultProps = {
  title: '',
  textBody: ''
}

export default Note;