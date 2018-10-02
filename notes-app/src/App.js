import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import NoteForm from './components/NoteForm'
import NoteSingle from './components/NoteSingle'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1537805881051,
          title: "1. Get a backpack",
          text: "Find a Jansport backpack that can hold all your gear.",
          tags: ["gear", "capacity"]
        },
        {
          id: 1537805891197,
          title: "2. Grab a buddy",
          text: "Find an outdoorsy friend that loves to camp.",
          tags: ["outsdoorsy", "friend"]
        }

        this.componentDidMount(){
          console.log('mounted');
          axios.get()
          
        }
      ],
    };
  }

  render() {
    return (
      <div1 className="App">
        <Route exact path="/" render={() => 
          <NotesMain
            notes={this.state.notes}
            
          />
        }/>
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div1>
    );
  }
}

export default withRouter(App);
