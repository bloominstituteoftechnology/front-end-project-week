import React from 'react';
import Button from './Button';

export default props => {
  const noProps = {
    styles: {'backgroundColor': 'red'},
    text: 'No',
    clickButton: props.toggle,
  }
  const yesProps = {
    text: 'Yes',
    clickButton: props.delete,
  }
  return(
    <div className="modal">
      <p>Are you sure you want to delete this?</p>
      <div className="modal-container">
        <div className="modal-button">
          <Button {...noProps}/>
        </div>
        <div className="modal-button">
          <Button {...yesProps}/>
        </div>
      </div>
    </div>
  )
}
