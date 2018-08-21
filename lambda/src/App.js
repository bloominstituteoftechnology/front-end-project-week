import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import SideBar from './components/sidebar'
import NoteView from './components/NoteView';
import NewNote from './components/NewNote';
import {notes} from './components/Notes';
import EditView from './components/EditView';
import SingleNote from './components/SingleNote';


let id = 10;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes:notes,
      title: '',
      content: '',
      id: id,
      
    }} 
     handleChange = e =>{
      this.setState({[e.target.name]: e.target.value});
    }
     addNote = e => {
      e.preventDefault();
      let notes = this.state.notes.slice();

      notes.push({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        });
      this.setState({notes, title:'', content:''})
      console.log(this.state.notes);
    }
  
   
  render() {
    return (
      <div className="App">
     
      <SideBar/> 

       <Route exact path='/' render={props => <NoteView {...props} notes={this.state.notes}/>}/>

       <Route exact path='/new' render={props => <NewNote {...props}title={this.state.title}
       content={this.state.content}handleChange={this.handleChange}addNote={this.addNote} />}/>

       <Route exact path='/view/:id' render={props => <SingleNote {...props} notes={this.state.notes} />}/>
       
       <Route exactpath='/view/edit:id' render={props => <EditView {...props} notes={this.state.notes} />} />
      </div>
    );
  }
}

export default App;
