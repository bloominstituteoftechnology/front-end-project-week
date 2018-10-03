import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
      // id: '',
      title: '',
      textBody: ''
    
    };
  }

  handleEdit = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    event.preventDefault();
    
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    console.log(this.props.match.params);
    axios
      .put(`https://killer-notes.herokuapp.com/update/edit/${this.props.match.params.id}`, newNote)
        .then(res => {
          console.log(res);
          this.setState({
            notes: res.data,
            title: res.data.title,
            textBody: res.data.textBody
          });
        })
        .catch(err => {
          console.error(`Error: ${err}`)
        })

    this.setState({
      title: '',
      textBody: ''
    });
  }
    

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