import React from 'react';
import Button from '../Button';

const DeleteView = props => {

  return (
    <div className={props.isDeleteShowing ? 'delete-view is-showing' : 'delete-view'}>
      <div className="delete-view__bg" onClick={props.onClickHideDelete}></div>
      <div className="delete-view-modal">
        <span className="delete-view-modal__title">Are you sure you want to delete this?</span>
        <div className="delete-view-modal__button-container">
          <Button 
            type="button" 
            onButtonClick={props.onClickDelete} 
            text="Delete"
            buttonStyle="delete" />
          <Button 
            type="button" 
            onButtonClick={props.onClickHideDelete} 
            text="No" />
        </div>
      </div>
    </div>
    // <button type={props.type} onClick={e => onSubmit(e)}>{props.text}</button>
  );
};

export default DeleteView;