import React, { Component, Fragment } from 'react';
import './App.css';
import {notes} from './Notes/notes';
import {Route} from 'react-router-dom';
import Notes from "./Components/ListView"
import Home from "./Components/home"
import NoteView from "./Components/NoteView"
import CreateView from "./Components/CreateView"
import EditView from "./Components/EditView"
class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[]

    };

  }

 
  componentDidMount(){
console.log(notes)
    this.setState({ notes: notes});
    
    console.log(this.state)
   }
delete(e){
  let removed = e;
  console.log(notes)
  console.log(removed)
 console.log(this.notes)
const editedNote = notes.filter(note =>{

   return note.id !== removed.id;

 })
 console.log(editedNote)
}


  render() {
    console.log(this.state)
    return (

      <div className="App">
      <Route path="/" component={Home}/>
      <div className="container-styles">    
          <Route exact path="/"
          render= {props =><Notes  notes={this.state.notes}/>}
      />
      <Route path ="/note/:id"
      render ={props =><NoteView {...props} delete={this.delete} {...this.state}/>}
    />
    <Route path="/create" component={CreateView} />

    <Route path ="/edit/:id"
      render ={props =><EditView {...props} notes={this.state.notes}  {...this.state}/>}
    />
      </div>
      </div>
    );
  }
}

export default App;
