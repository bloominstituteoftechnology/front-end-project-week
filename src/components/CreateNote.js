import React from 'react';
import AddNote from '../components/AddNote';

export default class CreateNote extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleAddNote = (option) => {
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

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    
    if (options) {
    this.setState(() => ({ options }));
      }
    } catch (events) {
      // do nothing at all if data is invalid
    }
  }
  // comes in handy when figuring out when your component did change
  componentDidUpdate (prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  render() {
    // Removed title becauase we set up a default in the Stateless Header component
      // const title = 'Indecision';
      const subtitle = '';
      return (
          <div>
          <h3 className="add-option">Create New Note:</h3>
            <AddNote
             handleAddNote={this.handleAddNote}
            />
            </div>
      );
  }
}