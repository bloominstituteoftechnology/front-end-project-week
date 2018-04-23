import React, { Component } from 'react';
import './App.css';
import NotesTest from './components/notes'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import dummyData from './Data/DummyData';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    nextId: 3,
    notes: [
      {
        id: 0,
        title: 'wut',
        text: "hhhhhhhhhhhhhhhhhhhhhhhhhhh"
    },
    {
        id: 1,
        title: 'yut',
        text: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
    },
    ]
  }
}

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

      </div>
    );
  }
}

export default App;
