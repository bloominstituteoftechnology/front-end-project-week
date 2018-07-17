import React, { Component } from 'react';
import './App.css';
import Authenticate from './Authenticate/Authenticate';
import Note from './NotesContainer/Note';
import UpdateNotesContainer from './NotesContainer/UpdateNotesContainer';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NotesContainer from './NotesContainer/NotesContainer';
import CreateNotesContainer from './NotesContainer/CreateNotesContainer';
import HomeContainer from './HomeContainer/HomeContainer';
import { Route } from 'react-router-dom';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  logoutButton = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    
    window.location.reload();
  }

  render() {
    return (
      <div className="App">

        {this.props.fetching ? <div>Fetching Notes</div> :
          <React.Fragment>

            <Route path='/' render={props => <SideBarContainer {...props} logout={this.logoutButton} />} />
            <Route exact path='/' component={HomeContainer} />
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
  return {
    notes: state.notes,
    fetching: state.fetchingNotes
  }
}

export default Authenticate(withRouter(connect(mapStateToProps, { getNotes })(App)));
