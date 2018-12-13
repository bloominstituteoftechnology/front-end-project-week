// importing libraries
import React from 'react'
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// importing components
import NotesView from './views/NotesView';
import FormView from './views/FormView';
import DetailView from './views/DetailView';
import NavBarView from './views/NavBarView';
import LoginView from './views/LoginView';

// styled component for the App
const AppWrapper = styled.div`
  max-width: 100%;
  display: flex;

  .navbar-container {
    background-color: #D3D2D3;
    min-width: 30rem;
    min-height: 100vh;
    width: 25%;
  }

  .content-container {
    background-color: #F2F1F2;
    width: 75%;
    min-height: 100vh;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    .navbar-container {
      min-width: 100%;
      min-height: 20rem;
    }
    .content-container {
      width: 100%;
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper className="App">
        <div className="navbar-container">
          <Route path="/" render={
            props => <NavBarView {...props} />
          } />
        </div>
        <div className="content-container">
          <Route exact path="/" render={
            props => <NotesView {...props} />
          } />
          <Route path="/add" render={
            props => <FormView {...props}/>
          } />
          <Route exact path="/notes/:_id" render={
            props => <DetailView {...props} />
          } />
          <Route path="/notes/edit/:_id" render={
            props => <FormView update {...props} />
          } />
          <Route path="/login" render={
            props => <LoginView {...props} />
          } />
        </div>
      </AppWrapper>
    );
  }
}

export default App;