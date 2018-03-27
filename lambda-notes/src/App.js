import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import CreateNewNote from './components/CreateNewNote';
import styled from 'styled-components';

const StyledApp = styled.div`
    width: 100%;
    background: pink;

    .container {
        padding: none;
        margin: none;
        // margin-left: 12.5%;
    }
`;

class App extends Component {
    render() {
        return (
            <StyledApp>
                <Router>
                    <div className="container">
                    <Route path exact ='/' component={List}/>
                    <Route path='/create-new-note' component={CreateNewNote} />
                    </div>
                </Router>
            </StyledApp>
            
          );
        }
      }
      
      export default App;