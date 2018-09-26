import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components';

import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import NoteContainer from './components/NoteComponents/NoteContainer';
import NoteCreateForm from './components/NoteComponents/NoteCreateForm';
import NotePage from './components/NoteComponents/NotePage';

const Wrapper = Styled.div`
  background-color: #f3f3f3;
  height: 100%;
`;

const SideNav = Styled.div`
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
`;

const Content = Styled.div`
  max-width: 1580px;
  width: 100%;
  margin-left: 16%;
  padding-left: 3%;
  background-color: #f3f3f3;
`;

class App extends Component {
  state = {
    notes: [],
    ids: 4,
    isUpdating: false,
    note: null,
    filtered: false,
    filteredNotes: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => { console.error('GET_ERROR', err)});
  }

  addNote = (e, note) => {
    axios.post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response => {this.fetchData();  this.props.history.push('/')})
      .catch(err => console.error('POST_ERROR', err))

  };

  removeNote = (e, id) => {

    return axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {this.fetchData(); this.props.history.push('/')})
      .catch(err => console.error('DELETE_ERROR', err));
  }

  updateNote = (id, note) => {
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
      .then(response => {this.fetchData(); this.props.history.push(`/notes/${id}`);})
      .catch(err => console.error('UPDATE_NOTE ERROR', err));
  }

  updateNoteForm = (e, id) => {
    const note = this.state.notes.map(note => note).filter(note => note._id === id);
    this.setState({isUpdating: !this.state.isUpdating, note: note, filtered: false,}, () => this.props.history.push('/create-note'))
  }

  isUpdate = e => {
    this.setState({isUpdating: false, filtered: false,});
  }

  handleSearch = e => {
    if (e === '' || e === undefined || e.lenght === 0) {this.setState({filtered: false})};
    let updatedList = this.state.notes.filter(item => {
      return item.title.toLowerCase().search(e.toLowerCase()) !== -1;
    });

    this.setState({filteredNotes: updatedList, filtered: true});

  }

  sortList = (e, sorting) => {
    e.preventDefault();
    const notes = this.state.notes.sort((a,b) => {return a.title.toLowerCase().localeCompare(b.title.toLowerCase());});

    switch(sorting) {
      case 'front':
        return this.setState({notes});
      case 'back':
        return this.setState({notes: notes.reverse()})
    }
  }

  render() {
    return (
      <Wrapper>
        <SideNav>
          <Navigation isUpdate={this.isUpdate} handleSearch={this.handleSearch} sortList={this.sortList} />
        </SideNav>
        <Content>
          <Route exact path="/" render={ props =>
            <NoteContainer {...props}
              notes={this.state.filtered ? this.state.filteredNotes : this.state.notes} />
          } />
          <Route exact path="/create-note" render={ props =>
            <NoteCreateForm {...props} 
              addNote={this.addNote} 
              ids={this.state.ids} 
              isUpdating={this.state.isUpdating} 
              updateNote={this.updateNote} 
              isUpdate={this.isUpdate}
              note={this.state.note} />
          } />
          <Route path="/notes/:id" render={ props => 
            <NotePage {...props}
              notes={this.state.notes}
              updateNoteForm={this.updateNoteForm}
              removeNote={this.removeNote} />
          } />
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(App);
