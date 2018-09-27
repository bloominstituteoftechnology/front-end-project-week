import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class DeleteNote extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: this.props.note,
    }
  }

  deleteHandler = (e) => {
    this.props.deleteNote(this.state.note.id);
    this.props.disableDelete();
  }

  render() {
    return (
      <DeleteNoteDiv>
        <div className="inner-div">
          <h4>Are you sure you want to delete this?</h4>
          <div className='delete-buttons'>
            <Link
              id="delete"
              className="button"
              to="/all-notes/"
              onClick={this.deleteHandler}
            >Delete</Link>
            <Link
              id="no"
              className="button"
              onClick={() => this.props.disableDelete()}
              to={`/all-notes/${this.state.note.id}`}
            >No</Link>
          </div>
        </div>
      </DeleteNoteDiv>
    );
  }
}

const DeleteNoteDiv = styled.div`
    ${'' /* border: 1px solid purple; */}
    background: white;
    padding: 40px 100px;
    margin: 250px;
    height: 100vh;
    ${'' /* width: 500px; */}
    z-index: 10;
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    .inner-div {
      ${'' /* border: 1px solid red; */}
      padding: 0 100px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h4 {
        ${'' /* border: 1px solid red; */}
        text-align: center;
        font-weight: normal;
      }
      .delete-buttons {
        ${'' /* border: 1px solid green; */}
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: space-between;
        .button {
          ${'' /* border: 1px solid blue; */}
          padding: 10px;
          width: 80%;
          margin: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
          font-weight: bold;
          border: 1px solid lightgray;
        }
        #no {
          background-color: #2AC0C4;
        }
        #delete {
          background-color: red;
        }
      }
    }
`;
