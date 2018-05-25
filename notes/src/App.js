import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { CreateNote, DisplayNotes, EditNote, ViewNote } from './components';
import axios from 'axios';
const URL = 'http://localhost:3333/notes'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '1',
      notes: [],
    };
  }
  componentDidMount(){
    const myPromise = axios.get(URL);
    // pending state - we're getting the data..
    // resolved state- we have the data or a success..
    // rejected - state - something went wrong with the data.
    myPromise
      .then(response => {
        this.setState({ notes: response.data});
      })
      .catch(err => {
      console.error(err);
    });
  }

  
  render() {
    return (
      <div className="App">
       <div>
       <ul>
            {this.state.notes.map(({noteTitle, noteContent}, i) => (
              <li key={i}>
                <h4>{noteTitle}</h4>
                <h4>{noteContent}</h4>
              </li>
            ))}
          </ul>
        </div> 
        <Route path="/createNote" component={CreateNote}></Route>
        <Route exact path="/" component={DisplayNotes}></Route>
        <Route path="/viewNote" component={ViewNote}></Route>
        <Route path="/editNote" component={EditNote}></Route>
      </div>
    );
  }
}

export default App;
