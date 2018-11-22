import React from 'react';

const DeleteMenu = (props) => {
    const isMenuShowing = props.isMenuShowing;
    if (isMenuShowing === true) {
      return (
        <div className="delete-options">
          <h3>Are you sure you want to delete this?</h3>
          <button onClick={props.deleteHandler}>Delete</button>
          <button onClick={props.clickHandler}>No</button>
        </div>
      )
    } else {
      return null;
    }
}

export default DeleteMenu;