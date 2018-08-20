import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import EditForm from './edit-form.js';

const EditNoteDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  padding: 25px;
  background-color: white;
  height: 100vh;
  .links {
    ${'' /* border: 1px solid blue; */}
    padding: 15px;
    text-align: right;
    .link {
      margin: 8px;
      color: gray;
    }
  }
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export default class EditNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: props.note,
      count: props.count
    }
  }

  sendToApp = () => {

  }

  render() {
    return (
      <EditNoteDiv>
        <div className="links">
          <Link className="link" to={`/all-notes/${this.state.note.id}`}>back</Link>
        </div>
        <h4>Edit Note:</h4>
        <EditForm button="Save" count={this.state.count} editNote={this.props.editNote} note={this.state.note}></EditForm>
      </EditNoteDiv>
    );
  }
}
