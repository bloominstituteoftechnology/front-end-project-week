import React from 'react';
import {Route} from 'react-router-dom';
//import './App.css';
import NavBar from './components/NavBar';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import {Normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 ${reset}
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
      margin-bottom: 12px;
    box-sizing: border-box;

  }
    h1 {
      font-size: 3.7rem;
  }

    em {
      font-style: italic;
  }

    ul {
      list-style-type: disc;
      list-style-position: inside;
    }
      .App {
        //max-width: 880px;
    background-color: #f3f3f3;
      //display: flex;

      //@media(max-width: 600px) {
        //flex-direction: column;
    }
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
