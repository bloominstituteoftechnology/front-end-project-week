import React, { Component } from 'react';
import './App.css';
import Styled from 'styled-components'
import Note from './components/Note';
import { Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';
import Notes from './components/Notes';



const Container = Styled.div`
  display: flex;
  background: #F3F3F3;
`;



class App extends Component {


  render() {
    return (
      <div>
        <Container>
<Route path='/' component={Sidebar} />
<Route path='/notes' component={Notes} />
<Route path='/new' component={NewNote} />
<Route path='/edit/:id' component={EditNote} />
<Route path='/note/:id' render = {(props) => <Note {...props} />} />

      </Container>
      </div>
    );
  }
}

export default App;