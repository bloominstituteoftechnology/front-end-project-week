import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './components/List';
import CreateNewNote from './components/CreateNewNote';

class App extends Component {
    render() {
        return (
            
            <Router>
                <div>
                <Route path exact ='/' component={List}/>
                <Route path='/create-new-note' component={CreateNewNote} />
                </div>
            </Router>
            
          );
        }
      }
      
      export default App;