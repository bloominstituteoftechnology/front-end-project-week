import React, { Component } from 'react';
import styled from "react-emotion";


const Main = styled("main")`
  margin-left: 25%;
  width: 75%;
  height: 100vh;
  padding: 80px 45px 80px 35px;
  
  form {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2.7rem;
      font-weight: bold;
      color: #4A494A;
    }

    .title-input-container {
      input {
        margin-top: 40px;
        padding: 19px;
        width: 59%;
      }
    }
    .desc-input-container {
      textarea {
        margin-top: 19px;
        padding: 28px;
        width: 100%;
        height: 468px;
      }
    }

    button {
      margin-top: 18px;
      padding: 16px;
      width: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      background-color: #2AC0C4;
      border: solid 1px #939797;
    }
  }
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
          <h2>Edit Note:</h2>
          <div className="title-input-container">
            <input
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="desc-input-container">
            <textarea
              type="text"
              placeholder="Note Content"
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </Main>
    );
  }
}

export default EditNoteForm;