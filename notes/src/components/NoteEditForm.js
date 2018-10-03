import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const EditForm = styled.form`
  background: lightgray;
  display: flex;
  flex-direction: column;
  width:50%;
  .UpdateButton{
    background: lightgreen;
  }
`;

class NoteEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    
    };
  }


  updateNote = event => {
    event.preventDefault();
    
    const update = {
      id: this.state.id,
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
        <EditForm onSubmit={this.updateNote}>
          <h3>Edit Note:</h3>
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
          <button className='UpdateButton' onClick={this.updateNote} type="submit">Update</button>
        </EditForm>
      </React.Fragment>
    );
  }
}

export default NoteEditForm;