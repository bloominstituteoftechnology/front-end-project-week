import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div className= "main-widget">
    <div className="widget-header">
{/*   <h3 className="widget-header__title">Your Notes</h3>
    <button
    className="button button--link"
      onClick={props.handleDeleteOptions}>Remove All</button>
 */}  </div>
       {props.options.length === 0 && <p className="widget-message">Please add a note to get started!</p>}
        {
        props.options.map((option, index) => {
          return (
            <div>
            <Option 
            key={option} 
            optionText={option}
            // count={index +1}
            handleDeleteOption={props.handleDeleteOption}
            handleEditOption={props.handleEditOption}
            />
            </div>
          )})
       }
       </div>
   );
  };
  

  export default Options