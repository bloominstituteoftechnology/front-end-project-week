import React, { Component } from 'react';
import './App.css';
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
    return (
      <div className="App">

        {this.props.fetching ? <div>Fetching Notes </div> :
          <React.Fragment>
            <Route path='/' component={SideBarContainer} />
            <Route exact path='/' render={props => <NotesContainer {...props} notes={this.props.notes} />} />
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

export default withRouter(connect(mapStateToProps, { getNotes })(App));
