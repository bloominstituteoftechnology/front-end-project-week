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
            ],
            rightPanel : "AllNotes"
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

    handleCreateNote = (event) => {
        this.setState({rightPanel:"CreateNote"})
    }

    handleViewNotes=(event) => {
        this.setState({rightPanel:"AllNotes"})
    }
    render() {
        if (this.state.rightPanel == "AllNotes") {
            return (
                <div className="myApp">
                    <div className="first">
                        <h1>Lambda Notes</h1>
                        <h2>
                            <button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>
                        </h2>
                        <button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>
                    </div>

                    <div className="second">
                        <h3>Your Notes:</h3>
                        <NoteList notes={this.state.notes}/>

                    </div>
                </div>
            );
        } else if (this.state.rightPanel == "CreateNote") {
            return (
                <div className="myApp">
                    <div className="first">
                        <h1>Lambda Notes</h1>
                        <h2>
                            <button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>
                        </h2>
                        <button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>

                    </div>

                    <div className="second">
                        <h3>Your Notes:</h3>
                        <NoteForm createFunc={this.createNewNote}/>

                    </div>
                </div>
            );
        }
  }
}

export default App;
