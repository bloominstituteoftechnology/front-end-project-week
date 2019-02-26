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
     <div class="box1">
      <a class="button1" href="#popup1">View</a>
     </div>
    <div id="popup1" class="overlay">
	    <div class="popup">
	    	<a class="close" href="#">&times;</a>
		  <div class="content">
        <p className="option__text">{props.optionText}</p>
		  </div>
	    </div>
    </div>
    </div>
  )
  }

  export default Option
  
