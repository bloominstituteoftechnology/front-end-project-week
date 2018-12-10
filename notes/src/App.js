import React from 'react';
import {Route} from 'react-router-dom';
//import './App.css';
import NavBar from './components/NavBar';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background-color: #f3f3f3;

    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
  }
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Route path="/" component={NavBar} />
        {/*create Routes here*/}
        <Route path="/notes" component={NotesContainer} />
        <Route path="/note/:id" component={Note} />
        <Route path="/create" component={NoteForm} />
        <Route path="/edit/:id" component={NoteForm} />
      </div>
    </>
  );
};
export default App;
