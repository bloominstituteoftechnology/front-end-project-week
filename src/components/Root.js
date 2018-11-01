import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App.js';
import AddNote from './AddNote.js';
import EditNote from './EditNote.js';
import ViewNote from './ViewNote.js';
import Navbar from './Navbar.js';
import styled from 'styled-components';

const MyApp = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MyContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #F2F1F2;
  width: 100%;
  height: 100vh;
  padding:0 1rem;
`;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MyApp>
        <Navbar />
        <MyContent>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/newnote' component={AddNote} />
            <Route exact path='/notes/:id' render={props => <ViewNote {...props}/>} />
            <Route path='/notes/:id/edit' render={props => <EditNote {...props}/>} />
          </Switch>
        </MyContent>
      </MyApp>
    </Router>
  </Provider>
)

export default Root