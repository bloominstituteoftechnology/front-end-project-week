import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledEditForm = styled.div`
display: flex;
flex-direction: column;
width: 700px;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 240px;

h2 {
    margin-right: 400px;
}

form {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
}

input {
    box-sizing: border-box;
    margin-bottom: 5px;
    border: 2px solid #C9C9C9;
    padding: 5px;

    :first-child {
        height: 50px;
        padding-left: 10px;
    }

    :nth-child(2) {
        height: 500px;
        width: 1000px;
        text-align: top;
        padding-bottom: 440px;
        padding-left: 10px;
    }
}

button {
    width: 210px;
    height: 50px;
    background-color: #24B8BD;
    color: #F9FCFC;
    border: 2px solid #C9C9C9;
}
`

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  componentDidMount() {
      this.props.notes.filter( note => {
          if (this.props.match.params.id === note._id) {
             return this.setState({
                  title: note.title,
                  textBody: note.textBody
              })
          } else {
              return 'error'
          }
      })
  }


  submitChange = e => {
    e.preventDefault();
    const id = this.props.match.params.id
    const note = {
        title: this.state.title,
        textBody: this.state.textBody
    }
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(res => {
        console.log(res)
        this.setState({
            title: '',
            text: '',
        })
        window.location.reload();
    })
    this.props.history.push("/");
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledEditForm>
          <h2>Edit Note:</h2>
            <form onSubmit={this.submitChange}>
              <input
                onChange={this.handleInputChange}
                placeholder="Note Title"
                value={this.state.title}
                name="title"
              />
              <input
                onChange={this.handleInputChange}
                placeholder="Note Content"
                value={this.state.textBody}
                name="textBody"
              />
              <button type="submit">Update</button>
            </form>
      </StyledEditForm>
    );
  }
}

export default EditNote;