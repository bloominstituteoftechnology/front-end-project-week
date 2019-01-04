// *** === Imports === *** //
// React
import React, {
  Component,
  Fragment
} from 'react';

// React Router
import {
  Link,
  Route
} from 'react-router-dom';

// Views
import NoteFormView from './views/NoteFormView';
import NotesView from './views/NotesView';
import NoteView from './views/NoteView';

// Styles
import './App.css';
import {
  AppContainer,
  Header,
  NavBar,
  Logo,
  NavText,
  ViewContainer
} from './styles'

// *** === Class Component === *** //
class App extends Component {

  // ** == Render to DOM
  render() {
    return (
      <>
        <Header>
          <NavBar>
            <Logo>Notes</Logo>

              <Link to='/'>
                <NavText>
                  <i class="far fa-eye"></i>
                  View Notes
                </NavText>
              </Link>

              <Link to='/create-note'>
                <NavText>
                  <i class="fas fa-pencil-alt"></i>
                  Add Note
                </NavText>
              </Link>
          </NavBar>
        </Header>


        <AppContainer>
          <ViewContainer>

          {/* C - Create */}
          <Route
            exact
            path='/create-note'
            component={
              NoteFormView
            }
          />

          {/* Ra - Read All */}
          <Route
            exact
            path='/'
            component={
              NotesView
            }
          />

          {/* R1 - Read One  */}
          <Route
            exact
            path = '/note/:noteId'
            component = {
              NoteView
            }
          />

          {/* U - Update */}
          <Route
            update
            path='/note/:noteId/update'
            render={props => <NoteFormView {...props} update/>}
          />
          </ViewContainer>
        </AppContainer>
      </>
    );
  }
}

export default App;
