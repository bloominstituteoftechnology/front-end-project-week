import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { AppStyle, Navigation, Main } from './components/style/appStyle';

import NoteList from './components/functional/NoteList';
import NoteForm from './components/functional/NoteForm';
import ViewPage from './components/functional/ViewPage';

class App extends Component {
  render() {
    return (
      <AppStyle>
        <Navigation>
          <h1>Lambda Notes</h1>
          <Link to='/' className="link" >View Your Notes</Link>
          <Link to='/noteform' className="link">+ Create New Note</Link>
        </Navigation>
        <Main>
          <Route exact path='/' component={NoteList} />
          <Route exact path='/noteform/:id?' render={props => <NoteForm {...props} />} />
          <Route path='/notes/:id' render={props => <ViewPage {...props} />} />
          </Main>
      </AppStyle>
    );
  }
}

export default App;
