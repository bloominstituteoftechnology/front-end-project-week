import React, { Component } from 'react';

class AddNote extends Component {
    constructor() {
        super();
        this.state = {
            newNote: {id: '', title: '', text: ''}
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
          title: this.state.title,
          text: this.state.text
        });
      }
    
      handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    

    render() {
        return (
        <form onSubmit={this.addNote}>
           <input
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="text"
            value={this.state.text}
            name="text"
          />
          <button onClick={event => {this.handleSubmit(event)}} type="submit" className='button'>Save</button>
        </form> 
        )
    }
}

export default AddNote;