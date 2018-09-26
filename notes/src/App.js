import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AppStyle, Navigation, Main } from "./components/style/appStyle";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import NoteList from "./components/functional/NoteList";
import NoteForm from "./components/functional/NoteForm";
import ViewPage from "./components/functional/ViewPage";

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <AppStyle>
        <Navigation>
          <h1>Lambda Notes</h1>
          <Link to="/" className="link">
            View Your Notes
          </Link>
          <Link to="/noteform" className="link">
            + Create New Note
          </Link>
        </Navigation>
        <Main>
          <TransitionGroup className="transition-group">
            <CSSTransition 
              key={location.key}
              timeout={{enter: 400, exit: 400}}
              classNames="fade"
            >
              <section className='route-section'>
                <Switch location={location}>
                  <Route exact path="/" component={NoteList} />
                  <Route
                    exact
                    path="/noteform/:id?"
                    render={props => <NoteForm {...props} />}
                  />
                  <Route path="/notes/:id" render={props => <ViewPage {...props} />} />
                </Switch>
                </section>
            </CSSTransition>
          </TransitionGroup>
        </Main>
      </AppStyle>
      )} />
    );
  }
}

export default App;
