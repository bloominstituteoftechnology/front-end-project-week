import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export const NotesContext = React.createContext({})  //contextAPI

class NotesProvider extends Component{
    //set default state
    state = {
        notes: '',
        loading: true,
        error: null
    }


    //********.GET - Grab all the notes************
    fetchNotes = () =>{
        this.setState({loading: true})
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then((response) => {
                this.setState({ 
                    notes: response.data,
                    loading: false,
                    error: null
                })

            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: "Unable to load the notes, please try again.",
                })
            })
    }

    //*********.POST - Add note to notes array**************** */
    createNote = (newNote) =>{
        this.setState({loading: true})
        axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
        //if successful, returns id of new note within response.data.success
        .then((response) => {
            //grap individual newly created note
            axios.get(`https://fe-notes.herokuapp.com/note/get/${response.data.success}`)
                .then((response) => {
                    this.setState({ 
                        //add new note to notes array
                        notes: [...this.state.notes, response.data],
                        loading: false,
                        error: null
                })
                //go to '/' route - which displays ViewNotes.js
                this.props.history.push('/')
            })
            
        })
        .catch(err => {
            this.setState({
                loading: false,
                error: "Unable to create the note, please try again.",
            })
        })
    }

    //*********.PUT - Edit note in notes array**************** */
    editNote = (id, newNote) =>{
        this.setState({loading: true})
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, newNote)
        .then((response) => {
            this.fetchNotes()  //necessary to update this.state.notes
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                loading: false,
                error: "Unable to edit the note, please try again.",
            })
        })
    }

    //********.DELETE - Delete note in notes array******************* */
    deleteNote = (id) =>{
        this.setState({loading: true})
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then((response)=>{
            this.fetchNotes() //necessary to update this.state.notes
            this.props.history.push('/')
        })
        .catch(err => {
            this.setState({
                loading: false,
                error: "Unable to delete the note, please try again.",
            })
        })
    }


    render(){
        return (
            <NotesContext.Provider
                //Give access to any of the following to any element within NotesContext.Consumer
                value={
                    {state: {notes: this.state.notes ,
                        loading: this.state.loading, 
                        error: this.state.error,
                        status: this.state.status },
                    actions: {fetchNotes: this.fetchNotes,
                            createNote: this.createNote,
                            editNote: this.editNote,
                            deleteNote: this.deleteNote}}
                }
                >


                {this.props.children}
            </NotesContext.Provider>
        )
    }
}

export default withRouter(NotesProvider)