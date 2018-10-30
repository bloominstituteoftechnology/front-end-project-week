import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { StyledContainer } from './styles';
import Sidebar from './components/Sidebar/Sidebar';
import List from './components/List/List';
import ViewNote from './components/ViewNote/ViewNote';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route exact path="/note/:id" component={ViewNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/note/:id/edit" component={EditNote} />
      </StyledContainer>
    );
  }
}

export default App;
