import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';

const ViewContainer = styled.div`
  border: 1px solid black;
  margin-left: 300px;
  margin-top: -610px;
  height: 610px;
`;

const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 30px;
  margin-top: 15px;
`;

const EditButton = styled.button`
  margin-right: 20px;
  width: 50px;
  border-radius: 1px solid gray;
  background: #24b8bd;
  color: white;
`;

const SingleNote = styled.div`
  margin-top: 50px;
`;

const NoteTitle = styled.h3`
  display: flex;
  margin-left: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Content = styled.p`
  display: flex;
  margin-left: 30px;
`;

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        id: '',
        title: '',
        textBody: ''
      }
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

  // deleteNote = () => {
  //   console.log('delete working?')
  //   axios 
  //     .delete(`https://killer-notes.herokuapp.com/note/delete/${this.state.id}`)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => (
  //       console.log('Server Error', error)
  //     ));
  //     this.props.history.push('/')
  // }

  handleDelete = () => {
    this.props.handleDeleteNote(NoteView.id);
    this.props.history.push('/');
  }

  handleDeleteNote = noteId => {
    console.log('delete clicked');
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
      .then(response => {
        // this.setState({
        //   notes: this.state.notes.filter(note => {
        //     return note.id !== noteId;
        //   })
        // })
        this.props.fetchNotes();
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <ViewContainer>
        <NavButton>
          <EditButton onClick={this.editNote}>Edit</EditButton>
          <DeleteModal 
            {...this.props}
            handleDelete={this.handleDeleteNote}
          />
          
        </NavButton>
        <SingleNote>
          <NoteTitle>{this.state.title}</NoteTitle>
          <Content>{this.state.textBody}</Content>
        </SingleNote>
      </ViewContainer>
    );
  }
}

export default NoteView;