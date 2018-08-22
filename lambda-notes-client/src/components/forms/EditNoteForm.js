import React, { Component } from 'react';
import styled from "react-emotion";


const Main = styled("main")`
  margin-left: 25%;
  background-color: red;
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class EditNoteForm extends Component {
  state = {
    title: '',
    description: ''
  }

  handleOnChange = e => this.setState({[e.target.name]: e.target.value});

  handleEditNote = (e) => {
    e.preventDefault();
    let content = {
      id: parseInt(this.props.match.params.id, 10),
      title: this.state.title,
      description: this.state.description
    }
    this.props.editNote(content)
    this.setState({title: '', description: ''})
    this.props.history.goBack();
  }

  render() {
    return (
      <Main>
        <form action="submit" onSubmit={this.handleEditNote}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
          <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange} />
          <button type="submit">edit</button>
        </form>
      </Main>
    );
  }
}

export default EditNoteForm;