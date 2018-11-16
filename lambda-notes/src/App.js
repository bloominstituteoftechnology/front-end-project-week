import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import {Route} from 'react-router-dom'; 
import  CreateNew  from './components/CreateNew';
import NoteView  from './components/NoteView'; 
import axios from 'axios'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      notes: [{_id: null}],
      newId: 3,
      id: null
    }  
  }

  componentDidMount(){
    axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({notes: response.data})
      })
        .catch(err => console.log(err)); 
  }

  newNote = (newtitle, content) => {
    this.setState({
      notes:[
        ...this.state.notes, 
        {title: newtitle, textBody: content, id: this.state.newId}
      ],
      newId: this.state.newId + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Route 
            exact path='/' 
            render = {props => <Notes {...props} 
            notes={this.state.notes} />}  
          />
          <Route 
            path='/CreateNew' 
            render = { props=> (
              <CreateNew
                {...props}
                notes={this.state.notes}
                id={this.state.newId}    
                newNote={this.newNote}
              />
            )}
            /> 
          <Route exact path='/NoteView/:id' render={props => (
            <NoteView
            {...props}
            />
          )} />  
        </div> 
      </div>
    );
  }
}

export default App;
