import React, { Component } from 'react';
import './App.css';
// import NotesTest from './components/notes';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import free from './components/Notez';
import Poop from './components/NoteCreate';
import Here from './components/viewNote2';
import Update from './components/Update';
// import CreateNote from './components/createNote';
// import NoteAlone from './components/viewNote';
// import Edit from './components/Edit';
// import dummyData from './Data/DummyData';

class App extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     notes: [
//       {
//         id: 0,
//         title: 'wut',
//         text: "hhhhhhhhhhhhhhhhhhhhhhhhhhh"
//     },
//     {
//         id: 1,
//         title: 'yut',
//         text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
//     },
//     {
//       id: 2,
//       title: 'yut',
//       text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
//   },
//   {
//     id: 3,
//     title: 'yut3',
//     text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
// },
// {
//   id: 4,
//   title: 'yu4t',
//   text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
// },
// {
//   id: 5,
//   title: 'yut5',
//   text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
// },
//     ]
//   }
// }

//2 24 2 24 2 24 2 layout stuff
// handleNew = data => {
//   const newNote = {
//     id: this.state.notes.length,
//     title: data.title,
//     text: data.text
//   };
//   const newData = [...this.state.notes, newNote];
//   this.setState({
//     notes: newData
//   })
// }
// handleTextInput = e => {
//   this.setState({ [e.target.name]: e.target.value});
// }
// handleClick = () => {
//   this.props.onSubmit(this.state.title, this.state.text);
// }

// updateNote = (updatedNote, id) => {
//   const updatedNotes = this.state.notes.map(note => {
//     if(note.id === id) {
//       return { title: updatedNote.title, text: updatedNote.text, id: updatedNote.id }
//     }
//     else {
//       return note;
//     }
//   });
//   this.setState({ notes: updatedNotes });
// }

componentDidMount() {
    axios
      .get(`http://localhost:5000/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })  
      .catch(err => {
        console.log(err);
      });
    };
// } Dont need it if I use a state considering it this way to simplify


  render() {
    return (
    //   <Route exact path="/" render={() => <NotesTest notes={this.state.notes} />}/>
    //   <Route exact path="/create" render={() => <CreateNote notes={this.state.notes} noteCreate={this.handleNew}/>} />
    // <Route exact path="/note/:id" render={(props) => <NoteAlone {...props} notes={this.state.notes} />}/>
    //   <Route path="/editnote" render ={() => <Edit notes={this.state.notes} />}/>
      
      <div className="App">
      <div className="leftSide">
        <h1 className= "leftSideH1">Lambda Notes</h1>
        <Link to={"/"} className="leftButtons">
         View Your Notes
        </Link>
        <Link to={"/create"} className="leftButtons">
         +Create New Note
        </Link>
        {/* component={NoteAlone} */}
      </div>
      <Route exact path="/" component={free} />
      <Route exact path="/create" component={Poop}/>
    <Route exact path="/note/:id" component={Here}/>
      <Route path="/editnote/:id" render={props=> <Update {...props}/>} />
      </div>
    );
  }
}

export default App;
