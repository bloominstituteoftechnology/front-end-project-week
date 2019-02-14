import React, { Component } from 'react';
import './App.css';

//react imports
import { Route } from 'react-router-dom'

//component docs
import AllNotes from './components/AllNotes';
import MainNav from './components/MainNav'
import NewNote from './components/NewNote';
import SingleNote from './components/SingleNote';



class App extends Component {

  render() {
    return (
      <div className="main_div">
        <div className="main_nav">
          <MainNav />
          <Route exact path="/" component={AllNotes}/>

          <Route path="/notes/:id" component={SingleNote}/>
     
        </div>
      </div>
    );
  }
}

export default App;
