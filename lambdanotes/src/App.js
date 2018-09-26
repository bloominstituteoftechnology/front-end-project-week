import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NoteList from "./components/NoteList/notelist";
import NewNoteForm from "./components/NewNote/newnoteform";
import NoteCard from "./components/EditNote/notecard";
import EditNoteForm from "./components/EditNote/editnoteform";
//import Sidebar from './components/Sidebar/sidebar';



class App extends Component {
  componentDidMount(){
//   this.props.getNotes();

  }
  render(){
    return (
      <div className="App-container">
        
        <Route exact path='/' component ={NoteList}/>
        <Route path='/create' component={NewNoteForm}/>
        <Route path='/note/:id' component={NoteCard}/>
        <Route path='/edit/:id' component={EditNoteForm}/>
        
      </div>
    );
  }
  }


export default App;
