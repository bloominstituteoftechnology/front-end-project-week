import React, { Component } from 'react';
import SideBar from './components/sidebar/';
import Notes from './components/notes';
import NewNote from './components/notes/newNote.js';
import SingleNotePage from './components/notes/singleNotePage.js';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  
  componentDidMount(){
    if (this.props.match.url==='/'){
      this.props.history.push('/notes');
    } 
  }
  
  render() {
    
    return (
      <div className="App">
       <SideBar/>
       <Route exact path='/notes' component={Notes}/>
       <Route exact path='/create' component={NewNote}/>
       <Route path='/notes/:noteId' component={SingleNotePage} />
      </div>
    );
  }
}

export default withRouter(App);
