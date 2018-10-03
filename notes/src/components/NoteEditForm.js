import React, { Component } from 'react';
import Axios from 'axios';

class NoteEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    
    };
  }


  updateNote = event => {
    event.preventDefault();
    
    const update = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    Axios
      .put(`https://killer-notes.herokuapp.com/update/edit/id`, update)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(`Error: ${err}`)
        })

    this.setState({
      title: '',
      textBody: ''
    });
  }

  

  handleEdit = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.updateNote}>
        
          <input
            onChange={this.handleEdit}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <textarea rows="10" cols="30"
            onChange={this.handleEdit}
            placeholder="textBody"
            value={this.state.textBody}
            name="textBody"
          />
          <button type="Update">Add to the notes</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NoteEditForm;