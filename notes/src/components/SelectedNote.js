import React from 'react';

export default SelectedNote = props => {
  return (
    <div>
      <h4>{props.selected.title}</h4> 
      <span OnClick={() => props.handleShowNote({})}> X </span>
      <div>{props.selected.content}</div>
      <button onClick={() => props.handleDeleteNote()}>
        {`Delete ${props.selected.title}`}
      </button>
      <button onClick={() => props.toggleShowUpdate()}>
        {`Update ${props.selected.title}`}
      </button>
    </div>
  )
}