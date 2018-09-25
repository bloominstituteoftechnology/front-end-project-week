import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, Link, Switch } from 'react-router-dom';
import * as actions from './actions';
import Notes from './components/Notes';
import SingleNote from './components/SingleNote';
import NoteForm from './components/NoteForm';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Alert } from 'reactstrap';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  state = {
    visible: false
  };
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ visible: true });
    }
  }
  onDismiss = () => {
    this.setState({ visible: false });
  };
  logoutUser = () => {
    this.props.logoutUser(this.props.history);
  };
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarBrand>
            Lambda
            <br /> Notes
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/">
                View Your Notes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/notes/add">
                + Create New Note
              </NavLink>
            </NavItem>
            {!localStorage.getItem('token') ? (
              <React.Fragment>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NavItem>
                  <NavLink
                    onClick={this.logoutUser}
                    style={{ color: 'white', cursor: 'pointer' }}
                  >
                    Logout
                  </NavLink>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>
        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
          style={{ position: 'absolute', top: 0, width: '50%', left: '25%' }}
        >
          {this.props.error}
        </Alert>
        <Route
          exact
          path="/"
          render={props => (
            <Notes
              {...props}
              notes={this.props.notes}
              fetchNotes={this.props.fetchNotes}
              fetchingNotes={this.props.fetchingNotes}
            />
          )}
        />
        <Switch>
          <Route
            path="/notes/add"
            render={props => (
              <NoteForm {...props} addNote={this.props.addNote} />
            )}
          />
          <Route
            path="/notes/:id"
            render={props => <SingleNote {...props} note={this.props.note} />}
          />
        </Switch>
        <Route
          path="/login"
          render={props => (
            <Login {...props} loginUser={this.props.loginUser} />
          )}
        />
        <Route
          path="/register"
          render={props => (
            <Register {...props} registerUser={this.props.registerUser} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingNotes: state.fetchingNotes,
    fetchingNote: state.fetchingNotes,
    notes: state.notes,
    note: state.note,
    error: state.error,
    updatingNote: state.updatingNote
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(App)
);
