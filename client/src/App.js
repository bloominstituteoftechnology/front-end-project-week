import React, { Component } from 'react';
import SideNav from './components/SideNav';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import ListContainer from './containers/ListContainer';
import NoteContainer from './containers/NoteContainer';
import AddNoteContainer from './containers/AddNoteContainer';
import EditNoteContainer from './containers/EditNoteContainer';
import SearchBar from './containers/SearchBar';
import SortingOptions from './containers/SortingOptions';
import LoggedIn from './containers/LoggedIn';
import Register from './components/Register';
import Login from './components/Login';

const MainContent = styled.div`
  padding: 4rem;
`;

class App extends Component {
  render() {
    return (
      <div>
        <LoggedIn>{props => <SideNav {...props} />}</LoggedIn>
        <MainContent>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Register} />
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
            <Route exact path="/notes/:id/edit" component={EditNoteContainer} />
            <Route exact path="/notes/:id" component={NoteContainer} />
          </Switch>
        </MainContent>
      </div>
    );
  }
}

export default App;
