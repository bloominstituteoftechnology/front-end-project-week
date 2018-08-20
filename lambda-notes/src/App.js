import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Notes from './components/notes';
import NewNoteForm from './components/NewNoteForm';
import './App.css';



class App extends Component {
 state = {
      notes: [
        {
            id:0,
            title: "Cats",
            text:"Cats are so cute I mean seriously"
          },
          {
            id:1,
            title:"WWE Summer Smash",
            text:"So happy Ronda won the match!"
          },
          {
            id:2,
            title:"Food",
            text:"I like , pizza, icecream and sushi"
          },
          {
            id:3,
            title:"Justice League",
            text:"Wonder Woman, The Flash, Aquaman, Batman,Superman,Cyborg"
          },
          {
            id:4,
            title:"CS12",
            text:"CS12 rules, that is all"
          },
          {
            id:5,
            title:"Rachel",
            text:"My name is Rachel what's yours?"
          }
        ],
        title: '',
        text: ''
     };

     noteInput = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    noteSubmit = () => {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (this.state.newtitle !== "" || this.state.newbody !== "") {
        id++;
        notes.push({
          id: id,
          title: this.state.newtitle,
          text: this.state.newbody
        });
        this.setState({ notes, newtitle: "", newbody: "", id });
      }
    };


     render() {
    return (
      <div className="App">
      <Sidebar />
      <Route 
      exact 
      path="/" 
      render={(props) => <Notes{...props} notes={this.state.notes}/>}/>
      <Route path="/new-note" 
      render={props => ( 
      <NewNoteForm 
      {...props} 
      noteInput={this.noteInput}
      noteSubmit={this.noteSubmit} 
      /> 
      )} 
      />
   
    </div>
    );
  }
}

export default App;
