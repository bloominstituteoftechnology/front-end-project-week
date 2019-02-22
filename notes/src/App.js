import React, { Component } from 'react';
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import axios from "axios";
import{Route,Link, NavLink} from "react-router-dom";
import Note from "./Components/Note";
import DeleteForm from "./Components/DeleteForm"
import EditForm from "./Components/EditForm";
import SearchBar from "./Components/SearchBar"
import Login  from "./Components/Login"


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
            filteredNotes:[],
            isLogged:false
        }

    }
    createNewNote=(newNote)=>{


        console.log("New note ");
        console.log(newNote);
        axios.post("https://fe-notes.herokuapp.com/note/create",newNote)
            .then(res=>{

                console.log("POST IT",res) ;
                //here the data came in res.data.success
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
                //the server is different so we are not getting the array after deleting one element ,so weare
                // checking since data is deleted in res.data.success;we are storing the entire data (except the deleted one) by in a new variable and filterimng
                // it out with the id which is not equal to the id of the data we wanted to delete.
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

//giving all the data to notes and filtered notes also,
               // initially there will be no data because render will be called first
                // before componenDidMount,so we have to say data loading, otherwise will throw error

                this.setState({notes: res.data, filteredNotes : res.data})
            })

            .catch (err=>{

                console.log("Error in get", err) ;

            })

    }

    SearchHandler =(noteTitle)=>{
        if(noteTitle.length===0){

           this.setState({filteredNotes:this.state.notes})
            return;
        }
        console.log("Filter title as ", noteTitle)

       let filteredNotes = this.state.notes.filter(note=>{
            return note.title.toLowerCase().includes(noteTitle.toLowerCase());
        })

        console.log("Filtered notes = ", filteredNotes)
        this.setState({filteredNotes:filteredNotes})

       }


logOut=()=>{
  localStorage.clear();
  window.location.reload()


}





    render(){
        if(this.state.isLogged){
            return this.logOut();
        }

            return(
            <div className="myApp">

            }
                <div className="first">

                    <h2>Lambda Notes</h2>
                    {/*<button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>*/}
                    {/*<button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>*/}

                    <div className="navButtons">
                        <NavLink className="oneNavButton" to="/">NoteList</NavLink>
                        <NavLink className="oneNavButton" to="/NoteForm">+ Create a new note</NavLink>
                    </div>
                    <SearchBar search={this.SearchHandler} notes={this.state.filteredNotes}/>
                </div>



                <div className="second">


                    <Route exact path="/" render={(props) => <NoteList deleteNote={this.deleteNote} {...props}
                                                                       notes={this.state.filteredNotes}/>}/>
                    <Route exact path="/NoteForm"
                           render={(props) => <NoteForm {...props} createFunc={this.createNewNote}/>}/>

                    <Route exact path="/Note/:noteId"
                           render={(props) => <Note deleteNote={this.deleteNote} {...props} tmp="TMP"
                                                    notes={this.state.filteredNotes}/>}/>
                    <Route exact path="/DeleteForm/:noteId"
                           render={(props) => <DeleteForm{...props} deleteNote={this.deleteNote}/>}/>
                    <Route exact path="/EditForm/:noteId"
                           render={(props) => <EditForm{...props} editNote={this.editNote}
                                                       notes={this.state.filteredNotes}/>}/>

                </div>


            </div>
        );
    }
}

export default App

//we get all the attributes from (props) and {...props} gives us match,history and location
//if we don't pass filtered notes then even if we search with name it will display all notes,we want the original notes to be intact and don't mess up with that neither we want to fetch it again ,
// so we are passing filter notes .