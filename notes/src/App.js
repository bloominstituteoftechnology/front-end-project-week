import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response=> {
          console.log(response);
          this.setState({notes: response.data});
        })
        .catch(err=> {
          console.log(err);
        });
  }

  render() {
    return (
      <div className="App">
      <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
      <Route exact path='/' component={AddNoteForm}/>
      <Route exact path='/' render={(props)=> {
        return (<NotesList notes={this.state.notes}/>)
      }}/>
      </div>
    );
  }
}

export default App;
