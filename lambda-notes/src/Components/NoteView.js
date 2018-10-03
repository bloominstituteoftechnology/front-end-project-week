import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';

const ViewContainer = styled.div`
  border: 1px solid black;
  margin-left: 300px;
  margin-top: -610px;
`;

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: '',
      modal: false
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios 
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({
          id: response.data._id,
          title: response.data.title,
          textBody: response.data.textBody
        });
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  editNote = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    this.props.history.push(`/edit/${id}`)
  };

  deleteNote = id => {
    axios 
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
      this.props.history.push('/')
  }

  render() {
    return (
      <ViewContainer>
        <div className='top-nav'>
          <button onClick={this.editNote}>Edit</button>
          <DeleteModal 
            props={this.props} 
            id={this.props.match.params.id}
            delete={this.deleteNote}
          />
        </div>
        <div className='single-note'>
          <h3>{this.state.title}</h3>
          <p>{this.state.textBody}</p>
        </div>
      </ViewContainer>
    );
  }
}

export default NoteView;