import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom'; 

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';

//actions
import { getNotes, viewNote } from './components/actions';

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

  goHome(props) {
    props.history.push('/')
  }

  editNote(props) {
    props.history.push('/edit')
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={(props) => (
          <HeadNav
            {...props}
            goHome={this.goHome}
            editNote={this.editNote}
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
            <NoteView />
          )} />
          <Route exact path='/edit' render={(props) => (
            <EditNote />
          )} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    noteList: state.noteList,
    listLoading: state.listLoading
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, viewNote })(App));
