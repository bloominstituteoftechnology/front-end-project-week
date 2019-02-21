import React, { Component } from 'react';
import './App.css';

//react imports
import { Route } from 'react-router-dom'

//component docs
import AllNotes from './components/AllNotes';
import MainNav from './components/MainNav'
import NewNote from './components/NewNote';
import SingleNote from './components/SingleNote';
import EditNote from './components/EditNote';
import styled from 'styled-components';


const MainPageContain = styled.div`
  display:flexbox;
  height: 10000px;
  background-color:#e5e5e5;


`

const MainNavContain = styled.div`
  display:flexbox;
  justify-content:center;
  background-color:#a5a5a5;

  width: 200px;
`


class App extends Component {


  render() {
    return (
      <MainPageContain>
        <MainNavContain>
          <MainNav/>
        </MainNavContain>

        <div>
          <Route exact path="/" component= {AllNotes}/>

          <Route path="/notes/:id" component={SingleNote}/>

          <Route path="/NewNote" component={NewNote}/>

          <Route path ="/EditNote/:id" render={props => <EditNote {...props}/>}/>

        </div>
      </MainPageContain>
    );
  }
}

export default App;
