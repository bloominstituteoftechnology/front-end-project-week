import React, { Component } from 'react';

// Auxillary Packages
import { connect } from 'react-redux';
import { updateNote } from './actions';
import { withRouter } from 'react-router-dom';

// Purgatorial Packages
import { Route } from 'react-router-dom';

// Components
import ListView from './components/ListView';
import ActionPanel from './components/ActionPanel';
import NewNoteForm from './components/NewNoteForm';
import GotOne from './components/GotOne';
import EditNoteForm from './components/EditNoteForm';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-3" style={this.props.notes.length > 15 ? {height: '100%'} : {height: '100vh'}}>
          <div className="col-md-3 p-5 border-left action-container left-side">
            <ActionPanel />
          </div>
          <div className={`col-md-9 p-5 border right-side`}>
            <Route exact path="/" component={ListView} />
            <Route exact path="/newNote" component={NewNoteForm} />
            <Route exact path="/:title/:id" component={GotOne} />
            <Route exact path="/editForm/:title/:id" render={() => <EditNoteForm updateNote={ this.props.updateNote } />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    updated: state.updated,
    isFetching: state.isFetching,
    notes: state.notes,
  }
}

export default withRouter(connect(mapStateToProps, { updateNote })(App));
