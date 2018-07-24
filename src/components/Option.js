import React from 'react';


// This stateless function replaced code right below it
const Option = (props) => {
  return (
    <div className="option">
    <h2>{props.optionText}</h2>
    <p className="option__text">{props.optionText}</p>
     <button
     className="button-delete button--link"
     onClick={(events) => {
        props.handleDeleteOption(props.optionText);
     }}
     >
     delete
     </button>   
    </div>
  )
  }

  export default Option
  
  /*
  class Option extends React.Component {
     render() {
         return (
             <div>
              {this.props.optionText}   
             </div>
         )
     }
  }
  
  */