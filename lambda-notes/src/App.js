import React, { Component } from 'react';
import './App.css';
import {notes} from './Notes/notes';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Notes from "./Components/ListView"
import Home from "./Components/home"
import NoteView from "./Components/NoteView"
import CreateView from "./Components/CreateView"
import EditView from "./Components/EditView"
const url = 'http://localhost:5000/notes'
class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[]

    };

  }

 
  componentDidMount(){
    console.log('i mounted')
    this.updateGet()
    }
    updateGet =() =>{
    console.log('i worked')
     axios
      .get(url)
      
      .then(response => {
        this.setState({notes: response.data})
      
      })
      .catch(err =>{
        console.log(err);
    
      })
    }
    deleteNote = noteId =>{
      console.log('i d')
      axios
      .delete(`${url}/${noteId}`)
      .then(response =>{
          this.updateGet();
      })
      .catch(err =>{
          console.log(err);
      });
    };
    



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
      render ={props =><NoteView {...props} delete={this.deleteNote} {...this.state}/>}
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
