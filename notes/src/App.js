import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'; 

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';

//actions
import { getNotes, viewNote, create, edit } from './components/actions';

//page styling
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getNotes()
  }
  
  getNote = (event) => {
    const singleNote = this.props.noteList.filter(note => note._id === event.currentTarget.id)[0]
    this.props.viewNote(singleNote)
    this.props.history.push('/note')
  }
  
  goHome = (props) => {
    props.history.push('/')
  }
  
  editNote= (props) => {
    this.props.edit()
    props.history.push('/edit')
  }
  
  createNote = (props) => {
    console.log(props)
    this.props.create()
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
            create={this.props.create}
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

export default withRouter(connect(mapStateToProps, { getNotes, viewNote, create, edit })(App));
