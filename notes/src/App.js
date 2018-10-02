import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { StyleApp, Navigation, Main } from './components/Style/styleApp';

import NoteList from './components/Functional/NoteList';
import NoteForm from './components/Functional/NoteForm';
import ViewPage from './components/Functional/ViewPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <StyleApp>
            <Navigation>
              <h1>Lambda Notes</h1>
              <Link to="/" className="link">
                View Notes
              </Link>
              <Link to="/noteform" className="link">
                Create NoteForm
              </Link>
            </Navigation>
            <Main>
              <section>
                <Switch location={location}>
                  <Route exact path="/" component={NoteList} />
                  <Route
                    exact
                    path="/noteform/:id?"
                    render={props => <NoteForm {...props} />}
                  />
                  <Route
                    path="/notes/:id"
                    render={props => <ViewPage {...props} />}
                  />
                </Switch>
              </section>
            </Main>
          </StyleApp>
        )}
      />
    );
  }
}

export default App;
