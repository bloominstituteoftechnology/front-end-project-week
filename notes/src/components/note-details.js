import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getNotes} from '../actions';



const NoteDetailsDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: white;
  height: 100vh;
  .links {
    ${'' /* border: 1px solid blue; */}
    padding: 15px;
    text-align: right;
    .link {
      ${'' /* border: 1px solid red; */}
      margin: 8px;
      color: gray;
      ${'' /* font-weight: bold */}
    }
  }
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    line-height: 30px;
  }
`;

export default class NoteDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: {},
    }
  }

  componentDidMount(){
    console.log(this)
    console.log(this.props.note)
    console.log(this.state)
    if (this.props.note) {
      this.setState({note: this.props.note})
    };
  }

  render() {
    console.log(this)
    console.log(this.props.note)
    console.log(this.state)
    return (
      <div>
        {(this.props.note )?
        (<NoteDetailsDiv>
          <div className="links">
            <Link
              className="link"
              onClick={() => this.props.enableDelete()}
              to={`/all-notes/${this.state.note.id}/delete`}>delete</Link>
            <Link
              className="link"
              to={`/all-notes/${this.state.note.id}/edit`}>edit</Link>
            <Link
              className="link"
              to={`/all-notes/`}>back</Link>
          </div>

          <h4>{this.state.note.title}</h4>
          <p>{this.state.note.body}</p>
        </NoteDetailsDiv>) :
        null}
      </div>

    );
  }
}
