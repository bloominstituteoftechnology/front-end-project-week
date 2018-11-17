import React, {Component} from 'react'
import axios from 'axios'

export const NotesContext = React.createContext({})  //contextAPI

class NotesProvider extends Component{
    //set default state
    state = {
        notes: [],
        loading: false,
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
    // createNote = () =>{
    //     this.setState({loading: true})
    //     axios.post('https://fe-notes.herokuapp.com/note/create')
    //     .then((response) => {
    //         this.setState({ 
    //             notes: response.data,
    //             loading: false,
    //             error: null,
    //             status: 'view'
    //         })
    //     })
    //     .catch(err => {
    //         this.setState({
    //             loading: false,
    //             error: "Unable to load the notes, please try again.",
    //             status: null
    //         })
    //     })
    // }

    render(){
        return (
            <NotesContext.Provider
                value={
                    {state: {notes: this.state.notes ,
                        loading: this.state.loading, 
                        error: this.state.error,
                        status: this.state.status },
                    actions: {fetchNotes: this.fetchNotes,
                            createNote: this.createNote}}
                }
                >


                {this.props.children}
            </NotesContext.Provider>
        )
    }
}

export default NotesProvider