import React, { Component } from 'react';
import '../css/index.css';

class NewNote extends Component {
  state = {
    titleText: '',
    contentText: '',
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="New note" 
            value={this.state.inputValue} 
            onChange={this.handleTitleChange}/>
          <input type="text" 
            placeholder="Add text here . . ." 
            value={this.state.contentText} 
            onChange={this.handleContentChange}/>
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    )
  }

  handleTitleChange = (event) => {
    this.setState({titleText: event.target.value})
  }

  handleContentChange = (event) => {
    this.setState({contentText: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({titleText: ''});
    this.setState({contentText: ''});
  }
}


export default NewNote;