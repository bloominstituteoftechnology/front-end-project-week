import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import SideBar from './components/sidebar'
import NoteView from './components/NoteView';
import NewNote from './components/NewNote'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
  
      title: '',
      content: '',
    }}
     addNote = e => {
      e.preventDefault();
      let notes = this.state.notes.slice();
      notes.push({title: this.state.title, content: this.state.content});
      this.setState({notes, title:'', content:''})
      console.log(this.state.notes);
    }
    handleChange = e =>{
      this.setState({[e.target.name]: e.target.value});
    }
   
  render() {
    return (
      <div className="App">
     
      <SideBar/> 
       <Route exact path="/" render={props => <NoteView {...props}/>}/>
       <Route exact path="/new" render={props => <NewNote {...props}title={this.state.title}
       content={this.state.content}handleChange={this.handleChange}addNote={this.addNote} />}/>
      </div>
    );
  }
}

export default App;
