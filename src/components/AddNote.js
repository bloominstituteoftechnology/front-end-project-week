import React from 'react';

// wire up onSubmit
// handleAddNote -> fetch the value typed -> if value, then alert
export default class AddNote extends React.Component {
  state = {
    error: undefined
  };
  handleAddNote = (option) => {
    event.preventDefault();
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > - 1) {
      return 'This note already exists';
    } 
    // This is the shorthand version of the code below it
    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    /*
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
    */
  };
    handleAddNote = (event) => {
      event.preventDefault();
      // "Event.target" is the form element
      // then uses 'Elements" to go into the "input" by its name which is 'option" then we grab its value property
      const option = event.target.elements.option.value.trim();
  
      

      const error = this.props.handleAddNote(option);
      // if theres an option then do something which is alert that option
  
      // This is the shorthand version of the code below it
      this.setState(() => ({error: error}))
      /*this.setState(() => {
        return { error: error }
      })
      */
     if (!error) {
      event.target.elements.option.value = '';
     }
    };
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            {/* this calls the handleAddNote method from above */}
              <form className="add-option" onSubmit={this.handleAddNote}>
              <input className="add-option__input" type="text" name="option" />
                  <button className="button-new-note">Save</button>
                </form>
            </div>
        );
    }
  }
