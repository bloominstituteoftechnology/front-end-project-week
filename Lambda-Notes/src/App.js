import React, { Component } from 'react';
import './App.css';
import Sideview from './components/Sideview.js'
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import ViewNote from './components/Viewnote.js'
import ListView from './components/Listview.js';
import CreateNote from './components/CreateNote.js'
import DeleteNote from './components/DeleteNote.js'
import EditNote from './components/EditNote.js'

const ContentContainer = styled.div`
    display: table-cell;
    max-width: 450px;
    vertical-align: top;
    padding-left: 30px;
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sideview />
        <Route 
                    path='/' 
                    exact
                    render={props => 
                        <ListView {...props}/>
                    } 
                />
            
                <Route
                    path={`/notes/:id`}
                    render={props =>
                        <ViewNote {...props} />
                    }
                />
            
                <Route
                    path={`/create`}
                    render={props =>
                        <CreateNote {...props} />
                    }
                />
                
                <Route 
                    path={`/edit/:id`}   
                    render={props =>
                        <EditNote {...props} />
                    }
                />
                
                <Route
                    path={`/notes/delete/:id`}
                    render={props =>
                        <DeleteNote {...props} />
                    }
                />
      </div>
    );
  }
}

export default App;