import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import CreateNewNote from './components/CreateNewNote';
import styled from 'styled-components';
import SingleNoteView from './components/SingleNoteView';

const StyledApp = styled.div`
    width: 100%;
    background: grey;
    height: 100%;

    .container {
        padding: none;
        margin: none;
        
    }
`;

class App extends Component {
    render() {
        return (
            <StyledApp>
                <Router>
                    <div className="container">
                    <Route path='/' component={List} exact/>
                    <Route path='/create-new-note' component={CreateNewNote} />
                    <Route path='/single-note-view/:id' component={SingleNoteView} />
                    </div>
                </Router>
            </StyledApp>
            
          );
        }
      }
      
      export default App;