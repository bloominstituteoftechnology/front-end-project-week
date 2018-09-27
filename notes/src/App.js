import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import {PageWrapper, Body} from './components/style';
import EditNote from './components/EditNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <PageWrapper>
          <Navigation />
          <Body>
            <Route exact path={'/'}
              render={(props) => <NoteList notes={this.props.notes} />}
            />
            <Route path={'/add-note'} component={AddNote} />
            <Route path={'/view-note'}
              render={(props) => <ViewNote index={this.props.index} />}
            />
            <Route path={'/edit-note'} component={EditNote} />
          </Body>
        </PageWrapper>
      </div>
    );
  }
}

const mapDispatchtoProps = state =>({
  notes: state.notes,
  adding: state.adding,
  viewing: state.viewing,
  index: state.index,
  editing: state.editing
});

export default withRouter(connect(mapDispatchtoProps)(App));
