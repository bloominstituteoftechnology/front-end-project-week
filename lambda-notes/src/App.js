import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { ListView, NoteView } from './Views';


const URL = 'https://fe-notes.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    this.getAllNotes()
  }

  getAllNotes = () => {
    axios
      .get(URL + '/note/get/all')
      .then( data => {
        this.setState({
          notes: data.data
        })
        .catch( err => {
          console.log(err)
        })
      })
  }
  findNote = id => {
    
    return (
      this.state.notes.find( note => (  
        note.id === id
      ))
    )
  }


  render() {
    return (

        <div className="App">
        <span>
        {this.findNote('5bd89d8bdba2c40015df0b44')}
        
        </span>
          <Route 
            
            route='/' 
            render={(props) => (
              <ListView 
                {...props}
                notes={this.state.notes}/>
            )}  
            />      
          <Route 
            route={'/note/:id'}
            render={(props) => (
              <NoteView 
                match={props.match}
                findNote={id=>this.findNote(id)}
                />
            )}
           />
        </div>
    );
  }
}



export default App;
