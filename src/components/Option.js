import React from 'react';
import { NavLink, Router } from 'react-router-dom';

// This stateless function replaced code right below it
const Option = (props) => {
  return (
    <div className="option">
    <p className="option__text">{props.optionText}</p>
     <button
     className="button-delete button--link"
     onClick={(events) => {
        props.handleDeleteOption(props.optionText);
     }}
     >
     delete
     </button>
     <NavLink to="/edit"
     className="button-delete button--link"
     onClick={(events) => {
        props.handleEditOption(props.optionText);
     }}
     >
     Edit 
     </NavLink>
     <button to="/view"
     className="button-delete button--link"
     onClick={(events) => {
        alert(props.optionText);
     }}
     >
     View 
     </button>
    </div>
  )
  }

  export default Option
  
