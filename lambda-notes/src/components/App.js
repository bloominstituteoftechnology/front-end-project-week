import React, { Component } from 'react';
import './App.css';
import Note from './NotesContainer/Note';
import UpdateNotesContainer from './NotesContainer/UpdateNotesContainer';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer/NotesContainer';
import CreateNotesContainer from './NotesContainer/CreateNotesContainer';
import { Route } from 'react-router-dom';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log(this.props.fetching);
    return (
      <div className="App">

        {this.props.fetching ? <div>Fetching Notes</div> :
          <React.Fragment>

            <Route path='/' component={SideBarContainer} />
            <Route exact path='/notes' render={props => <NotesContainer {...props} notes={this.props.notes} />} />
            <Route exact path='/notes/:id' component={Note} />
            <Route path='/notes/:id/edit' component={UpdateNotesContainer} />
            <Route path='/create' component={CreateNotesContainer} />

          </React.Fragment>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.data);
  console.log(state.error);
  return {
    notes: state.notes,
    fetching: state.fetchingNotes
  }
}

export default withRouter(connect(mapStateToProps, { getNotes })(App));
