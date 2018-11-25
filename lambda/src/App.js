import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import NotesList from './sub-components/notesList';
import NewNote from './sub-components/newNote';
import NoteProfile from './sub-components/noteProfile';
import UpdateNote from './sub-components/updateNote';

import { loadNotesAction } from './Actions/notesActions'

import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],

    }
  }
  windowReload = (e) => {
    window.location.reload();
  }

  //events w/o redux:

  // componentDidMount = () => {
  //   axios
  //     .get('https://fe-notes.herokuapp.com/note/get/all')
  //     .then(response => {
  //       console.log(response)
  //       this.setState({
  //         notes: response.data,
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }


  // events with redux:

  componentDidMount = () => {
    this.props.loadNotesAction();
  }

  render() {
    return (
      <div className="App">
        <div>
          <Route exact path='/' render={ (props) => <NotesList {...props} notesList={this.props.notes} pageReload={this.windowReload} />} />
          <Route exact path='/create-new-note' render={ (props) => <NewNote {...props} pageReload={this.windowReload} />} />
          <Route exact path='/note/:id' render={ (props) => <NoteProfile {...props} pageReload={this.windowReload} />} />
          <Route exact path='/note/:id/update-note' render={ (props) => <UpdateNote {...props} pageReload={this.windowReload} />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    loadingNotes: state.loadingNotes,
    notesLoaded: state.notesLoaded,
    addingNotes: state.addingNotes,
    updatingNotes: state.updatingNotes,
    deletingNotes: state.deletingNotes,
    error: state.error,
  }
}

export default connect(mapStateToProps, {loadNotesAction})(App);
