import React, { Component } from 'react';
import NewForm from './new-form.js';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class NewNote extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    // console.log(this)
    // console.log(this.props)
    return (
      <NewNoteDiv>
        <div className="links">
          <Link
            className="link"
            to={`/all-notes/`}
          >back</Link>
        </div>
        <h4>Create New Note:</h4>
        <NewForm button="Create" username={this.props.username} count={this.props.count} newNote={this.props.newNote}></NewForm>
      </NewNoteDiv>
    );
  }
}

const NewNoteDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  background-color: #F3F3F3;
  padding: 25px;
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
    margin: 0 0 10px 10px;
  }
`;