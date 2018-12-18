import React, { Component } from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import LeftSideBarNav from "./components/LeftSideBarNav";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],      
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data);
        this.setState({
          notes: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <LeftSideBarNav />
        <div className='app-content'>
        <Route exact path='/' render={() => <NoteList notes={notes} /> } />
        <Route path='/create' render={() => <AddNote  notes={notes} />} />
        </div>        
      </div>
    );
  }
}

export default App;
