import React, { Component } from 'react';
import styled from 'styled-components';

const NoteDetailsStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);

  header {
    display: flex;
    justify-content: flex-end;
    margin: 10px 100px 10px 0;
    width: 90%;
  }

  h1 {
    margin-bottom: 20px;
  }
`

class NoteDetails extends Component {
  state = {
    title: '',
    content: '',
    id: '',
  }

  componentDidMount() {
    this.setState({
      title: this.props.noteDetails.title,
      content: this.props.noteDetails.content,
      id: this.props.noteDetails.id,
    })
  }
  render() {
    return (
      <NoteDetailsStyled>
        <header>
          <button>Edit</button>
          <button>Delete</button>
        </header>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </NoteDetailsStyled>
    )
  }
}

export default NoteDetails;