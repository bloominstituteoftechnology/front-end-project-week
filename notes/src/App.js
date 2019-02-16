import React, { Component } from 'react';
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import axios from "axios";
import{Route,Link, NavLink} from "react-router-dom";
import Note from "./Components/Note";
import DeleteForm from "./Components/DeleteForm"
import EditForm from "./Components/EditForm"

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
    editNote=(note)=>{


        console.log("New note ");
        console.log(note);
        axios.put("https://fe-notes.herokuapp.com/note/edit/" + note._id,note)
            .then(res=>{

                console.log("PUT IT",res) ;
                this.setState({notes:res.data.success})

            })

            .catch(err=>{
                console.log("update Error",err);
            })

    }
    deleteNote=(id)=>{

        axios.delete("https://fe-notes.herokuapp.com/note/delete/" +id)
            .then(res=>{
                console.log("DELETE NOTE",res);
                if(res.data.success==="Note successfully deleted"){

                    let newNotes=this.state.notes.filter(note=>{
                        return (note._id != id)
                    })
                    this.setState({notes:newNotes})
                }



            })
            .catch(err=>{
                console.log("DELETE Error",err);
            })
    }


    componentDidMount() {
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
            .then(res=> {
                console.log("GET DATA", res);


                this.setState({notes: res.data})
            })

            .catch (err=>{

                console.log("Error in get", err) ;

            })

    }

    render(){

        return(
            <div className="myApp">
                <div className="first">
                    <h2>Lambda Notes</h2>
                    {/*<button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>*/}
                    {/*<button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>*/}

                    <div className="navButtons">
                        <NavLink className="oneNavButton" to="/">NoteList</NavLink>
                        <NavLink className="oneNavButton" to="/NoteForm">+ Create a new note</NavLink>
                    </div>


                </div>


                <div className="second">


                    <Route  exact path="/" render={(props)=> <NoteList {...props}   />}/>
                    <Route  exact path="/NoteForm" render={(props)=> <NoteForm {...props} createFunc={this.createNewNote}/>}/>

                    <Route exact path="/Note/:noteId" render={(props)=><Note {...props} tmp="TMP" notes={this.state.notes} />}/>
                    <Route exact path ="/DeleteForm/:noteId" render={(props)=><DeleteForm{...props}deleteNote={this.deleteNote}/>}/>
                    <Route exact path ="/EditForm/:noteId" render={(props)=><EditForm{...props} editNote={this.editNote}
                          notes = {this.state.notes}/>}/>


                </div>
            </div>
        );
    }
}

export default App

