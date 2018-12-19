import React from 'react';

const DeleteMenu = (props) => {
    const isMenuShowing = props.isMenuShowing;
    if (isMenuShowing === true) {
      return (
        <div className="delete-options">
          <div className="inner-menu">
            <h3>Are you sure you want to delete this?</h3>
            <div className="button-container">
              <button onClick={props.deleteHandler} className="delete-button">Delete</button>
              <button onClick={props.clickHandler} className="no-button">No</button>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
}

export default DeleteMenu;