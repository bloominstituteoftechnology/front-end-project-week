import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'; 

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';
import CreateNote from './components/EditCreate/CreateNote';
// import Delete from './components/Delete/Delete';

//actions
import { getNotes, viewNote, create, createMode, editMode, ruSure, deleter } from './components/actions';

//page styling
import './App.css';
class App extends Component {
  // componentDidMount() {
  //   this.props.getNotes()
  // }

  getNote = (event) => {
    const id = event.currentTarget.id;
    this.props.viewNote(id)
    this.props.history.push(`/notes/${id}`)
  }
  
  goHome = async (props) => {
    await this.props.getNotes()
    props.history.push('/notes')
  }
  
  editNote = (props) => {
    this.props.editMode()
    props.history.push(`/edit/${props.note.id}`)
  }
  
  createNote = (props) => {
    this.props.createMode()
    props.history.push('/create')
  }

  deleteNote = (event) => {
    event.preventDefault()
    this.props.ruSure()
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => (
          <HeadNav
            {...props}
            goHome={this.goHome}
            createNote={this.createNote}
          />
        )} />
        <div className='mainView'>
          <Route exact path='/notes' render={(props) => (
            <ListView
              {...props}
              noteList={this.props.noteList}
              getNote={this.getNote}
            />
          )} />
          <Route path='/notes/:id' render={(props) => (
            <NoteView
              {...props}
              goHome={this.goHome}
              editNote={this.editNote}
              note={this.props.note}
              deleteNote={this.deleteNote}
              deleteModal={this.props.deleteModal}
              deleter={this.props.deleter}
            />
          )} />
          <Route exact path='/edit/:id' render={(props) => (
            <EditNote 
              {...props}
              goHome={this.goHome}
            />
            )} />
          <Route exact path='/create' render={(props) => (
            <CreateNote
              {...props}
              goHome={this.goHome}
            />
          )} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteList: state.noteList,
    loading: state.loading,
    note: state.note,
    editNote: state.editNote,
    deleteModal: state.deleteModal
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, viewNote, create, createMode, editMode, ruSure, deleter })(App));
