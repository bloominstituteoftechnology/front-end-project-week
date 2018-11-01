import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'; 

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';
import Delete from './components/Delete/Delete';

//actions
import { getNotes, viewNote, create, createMode, editMode } from './components/actions';

//page styling
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getNotes()
  }
  
  getNote = (event) => {
    this.props.viewNote(event.currentTarget.id)
    this.props.history.push('/note')
  }
  
  goHome = (props) => {
    props.history.push('/')
  }
  
  editNote = (props) => {
    this.props.editMode()
    props.history.push('/edit')
  }
  
  createNote = (props) => {
    this.props.createMode()
    props.history.push('/edit')
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
          <Route exact path='/' render={(props) => (
            <ListView
              {...props}
              noteList={this.props.noteList}
              getNote={this.getNote}
            />
          )} />
          <Route path='/note' render={(props) => (
            <NoteView
              {...props}
              editNote={this.editNote}
              note={this.props.note}
            />
          )} />
          <Route exact path='/edit' render={(props) => (
            <EditNote
              // note={this.props.note}
              // editNote={this.props.editNote}
            />
          )} />
          <Route path='/' render={(props) => (
            <Delete />
          )} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteList: state.noteList,
    listLoading: state.listLoading,
    note: state.note,
    editNote: state.editNote
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, viewNote, create, createMode, editMode })(App));
