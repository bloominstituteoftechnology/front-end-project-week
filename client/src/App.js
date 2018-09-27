import React, { Component } from 'react';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ListContainer from './containers/ListContainer';
import NoteContainer from './containers/NoteContainer';
import AddNoteContainer from './containers/AddNoteContainer';
import EditNoteContainer from './containers/EditNoteContainer';
import SearchBar from './containers/SearchBar';
import SortingOptions from './containers/SortingOptions';
import LoggedIn from './containers/LoggedIn';
import Register from './containers/Register';
import Login from './containers/Login';
import Fade from './components/Fade';
import { checkToken, logout } from './actions';

const MainContent = styled.div`
  padding: 4rem;
`;

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
  }

  render() {
    return (
      <div>
        <LoggedIn>
          {props => <SideNav {...props} logout={this.props.logout} />}
        </LoggedIn>
        <MainContent>
          <Fade>
            {({ location }) => (
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  render={() =>
                    !this.props.isLoggedIn ? (
                      <Login />
                    ) : (
                      <Redirect to="/notes" />
                    )
                  }
                />
                <Route
                  exact
                  path="/register"
                  render={() =>
                    !this.props.isLoggedIn ? (
                      <Register />
                    ) : (
                      <Redirect to="/notes" />
                    )
                  }
                />
                {this.props.isLoggedIn && (
                  <React.Fragment>
                    <Route
                      exact
                      path="/notes"
                      render={() => (
                        <React.Fragment>
                          <SearchBar />
                          <SortingOptions />
                          <ListContainer />
                        </React.Fragment>
                      )}
                    />
                    <Route
                      exact
                      path="/notes/new"
                      component={AddNoteContainer}
                    />
                    <Route
                      exact
                      path="/notes/:id/edit"
                      component={EditNoteContainer}
                    />
                    <Route exact path="/notes/:id" component={NoteContainer} />
                  </React.Fragment>
                )}
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            )}
          </Fade>
        </MainContent>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ isLoggedIn }) => ({ isLoggedIn }),
    { checkToken, logout },
  )(App),
);
