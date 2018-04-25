import React, { Component } from 'react';
import './App.css';
import NotesTest from './components/notes';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CreateNote from './components/createNote';
import NoteAlone from './components/viewNote';
import Edit from './components/Edit';
// import dummyData from './Data/DummyData';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    notes: [
      {
        id: 0,
        title: 'wut',
        text: "hhhhhhhhhhhhhhhhhhhhhhhhhhh"
    },
    {
        id: 1,
        title: 'yut1',
        text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
    },
    {
      id: 2,
      title: 'yut2',
      text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  },
  {
    id: 3,
    title: 'yut3',
    text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
  id: 4,
  title: 'yu4t',
  text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
{
  id: 5,
  title: 'yut5',
  text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
},
    ]
  }
}

//2 24 2 24 2 24 2 layout stuff
handleNew = data => {
  const newNote = {
    id: this.state.notes.length,
    title: data.title,
    text: data.text
  };
  const newData = [...this.state.notes, newNote];
  this.setState({
    notes: newData
  })
}
// handleTextInput = e => {
//   this.setState({ [e.target.name]: e.target.value});
// }
// handleClick = () => {
//   this.props.onSubmit(this.state.title, this.state.text);
// }


// componentDidMount() {
//   this.setState({
//     notes: dummyData
//   });
// } Dont need it if I use a state considering it this way to simplify


  render() {
    return (
      
      <div className="App">
      <div className="leftSide">
        <h1 className= "leftSideH1">Lambda Notes</h1>
        <Link to={"/"} className="leftButtons">
         View Your Notes
        </Link>
        <Link to={"/create"} className="leftButtons">
         +Create New Note
        </Link>
        
      </div>
      <Route exact path="/" render={() => <NotesTest notes={this.state.notes} />}/>
      <Route exact path="/create" render={() => <CreateNote notes={this.state.notes} noteCreate={this.handleNew}/>} />
      <Route exact path="/note/:id" component={NoteAlone}/>
      <Route path="/editnote" render ={() => <Edit />}/>
      </div>
    );
  }
}

export default App;
