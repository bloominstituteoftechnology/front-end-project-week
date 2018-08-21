import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNoteForm from './components/NewNoteForm';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
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
    }

     addNote = event => {
       event.preventDefault();
       const notes = this.state.notes.slice();
       notes.push({ text: this.state.text, title: this.state.title, id: Date.now() });
       this.setState({ notes, title: '', text: '' });
     }

     handleInputChange = event => {
       console.log(event.target.value);
       this.setState({[event.target.name]: event.target.value});
       console.log(this.state.notes);
     }



     render() {
      //  console.log(this.state.notes);
      return (
          <div className="App">
              <Sidebar />
              <Route exact path="/"render={(props) => <Notes {...props} notes={this.state.notes} />} />
              <Route  exact path="/create-new-note" render={(props) => <NewNoteForm {...props}  title={this.state.title} text={this.state.text} addNote={this.addNote} handleInputChange={this.handleInputChange} />} />
              <Route  exact path="/notes/:id" render={(props) => <Note {...props} notes={this.state.notes} title={this.state.title} text={this.state.text}  />}  />
          </div>
      );
   }
}

export default App;
