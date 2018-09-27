import React, { Component } from 'react';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import ListContainer from './containers/ListContainer';
import NoteContainer from './containers/NoteContainer';
import AddNoteContainer from './containers/AddNoteContainer';
import EditNoteContainer from './containers/EditNoteContainer';
import SearchBar from './containers/SearchBar';
import SortingOptions from './containers/SortingOptions';
import LoggedIn from './containers/LoggedIn';
import Register from './components/Register';
import Login from './components/Login';
import Fade from './components/Fade';

const MainContent = styled.div`
  padding: 4rem;
`;

class App extends Component {
  render() {
    return (
      <div>
        <LoggedIn>{props => <SideNav {...props} />}</LoggedIn>
        <MainContent>
          <Fade>
            {({ location }) => (
              <Switch location={location}>
                <Route exact path="/" render={() => <Login />} />
                <Route exact path="/register" component={Register} />
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
                <Route exact path="/notes/new" component={AddNoteContainer} />
                <Route
                  exact
                  path="/notes/:id/edit"
                  component={EditNoteContainer}
                />
                <Route exact path="/notes/:id" component={NoteContainer} />
              </Switch>
            )}
          </Fade>
        </MainContent>
      </div>
    );
  }
}

export default App;
