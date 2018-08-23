import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNoteForm from './components/NewNoteForm';
import EditNote from './components/EditNote';
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
            title:"Summer",
            text:"Beach and Margaritas!"
          },
          {
            id:2,
            title:"Food",
            text:"I like , pizza, icecream and sushi"
          },
          {
            id:3,
            title:"Hey!",
            text:"Whatsup"
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
        text: '',
        }
    }



     addNote = event => {
       event.preventDefault();
       const notes = this.state.notes.slice();
       notes.push({ text: this.state.text, title: this.state.title, id: Date.now() });
       this.setState({ notes, title: '', text: '' });
     }

     handleInputChange = event => {
       this.setState({[event.target.name]: event.target.value});
      };


     deleteNote = note => {
      let notes = this.state.notes.slice();
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
          notes.splice(i, 1);
        }
      }
      this.setState({ notes })
    }




    editNote = note => {
      console.log(note);
      let notes = this.state.notes.slice();
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
          notes[i] = note
        }
      }
      this.setState({ notes })
    }

    handleInputChange = event => {
      this.setState({[event.target.name]: event.target.value});
     };

    //  componentWillMount(){
    //   if (localStorage.getItem('notes')){
    //     let json = localStorage.getItem('notes')
    //     // JSON.PARSE(json)
    //     this.setState({notes:  JSON.parse(json)})
    //   }
    //  }

    //  componentWillUpdate(nextProps ,nextState){
    //    localStorage.setItem('notes',JSON.stringify(nextState.notes))
    //  }

    





     render() {
      //  console.log(this.state.notes);
      return (
          <div className="App">
              <Sidebar />
              <Route 
                exact path="/"
                render={(props) => <Notes {...props} notes={this.state.notes}/>} 
              />
              <Route  
                exact path="/create-new-note" 
                render={(props) => <NewNoteForm {...props} 
                          title={this.state.title} 
                          text={this.state.text} 
                          addNote={this.addNote} 
                          handleInputChange={this.handleInputChange} />} 
              />
              <Route  
                exact path="/notes/:id" 
                render={(props) => <Note {...props} 
                          notes={this.state.notes} 
                          title={this.state.title} 
                          text={this.state.text} 
                          deleteNote={this.deleteNote}
                          handleInputChange={this.handleInputChange} />}  
              />
              <Route  
                exact path="/notes/:id/edit" 
                render={(props) => <EditNote {...props} 
                        notes={this.state.notes} 
                        editNote={this.editNote}/>} 
              />
              <Route 
                exact path="/notes" 
                render={(props) => <Note {...props} 
                        notes={this.state.notes} 
                        title={this.state.title} 
                        text={this.state.text}  
                        handleInputChange={this.handleInputChange} 
                        deleteNote={this.deleteNote} />}
              />
        </div>
      );
   }
}

export default App;
