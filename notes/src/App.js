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


        console.log("New note ");
        console.log(newNote);
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
      <div className="myApp">
          <div classname="first">
               <h1>Lambda Notes</h1>
               <h2><button>View Your Notes</button></h2>
              <NoteForm  createFunc={this.createNewNote}/> +create new note
         </div>
        <div className="second">
          <h3>Your Notes:</h3>
          <NoteList  notes={this.state.notes} />

        </div>
      </div>
    );
  }
}

export default App;
