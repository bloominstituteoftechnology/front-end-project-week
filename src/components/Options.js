import React from 'react';
import Option from './Option';

/* Mapped over the options array then for ever option in the array we returned them as p tags shorthand version below

"this.props.options.map((option) => <p key={Math.random()}>{option}</p>)"
*/

// Challenege add Remoev all button
// Setup handleRemoveAll
// setup onClick to fire the method

// This stateless function replaced code right below it
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
  
  /*
  
  class Options extends React.Component {
  // deleted constructor function because we didnt need to bind a method
  
    render() {
        return (
         <div>
         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {
             this.props.options.map((option) => {
               return <Option key={Math.random()} optionText={option} /> })
            }
            </div>
        );
    }
  }
  
  */

  export default Options