import React, { Component } from 'react';
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import axios from "axios";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{

                "tags": [],
                "title": "",
                "textBody": ""


            },
            ]
        }

    }
    createNewNote=(newNote)=>{


        axios.post("https://fe-notes.herokuapp.com/note/create",newNote)
            .then(res=>{

                console.log("POST IT",res) ;
                this.setState({notes:res.data.success})

            })

            .catch(err=>{

            })

    }



    render() {
    return (
      <div className="App">
          <h1>Lambda Notes</h1>
          <h2><button>View Your Notes</button></h2>
          <h2><button>+ Create New Notes</button></h2>
          <h3>Your Notes:</h3>
          <NoteList  notes={this.state.notes} />
          <NoteForm createFunc={this.createNewNote}/>
      </div>
    );
  }
}

export default App;
