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



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      textBody:""
    }
  }

  updateNote = ()=> {
    console.log(this.props)

  }

  render() {
    return (
      <div className="main_div">
        <div className="main_nav">
          <MainNav />
          <Route exact path="/" component= {AllNotes}/>

          <Route path="/notes/:id" component={SingleNote}/>

          <Route path="/NewNote" component={NewNote}/>

          <Route path ="/EditNote/:id" component={EditNote} />
      
        </div>
      </div>
    );
  }
}

export default App;
