import React, {Component} from 'react'
import axios from 'axios'

export const NotesContext = React.createContext({})

class NotesProvider extends Component{
    //set default state
    state = {
        notes: [],
        loading: false,
        error: null,
        status: 'view' //can be view, create, edit , or delete
    }

    fetchNotes = () =>{
        console.log('fetchNotes called');
        this.setState({loading: true})
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then((response) => {
                this.setState({
                    notes: response.data,
                    loading: false,
                    error: null,
                    status: 'view'
                })
                console.log(this.state);
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: "Unable to load the notes, please try again."
                })
            })
    }

    render(){
        return (
            <NotesContext.Provider
                value={
                    {state: {notes: this.state.notes ,
                        loading: this.state.loading, 
                        error: this.state.error,
                        status: this.state.status },
                    actions: {fetchNotes: this.fetchNotes}}
                }
                >


                {this.props.children}
            </NotesContext.Provider>
        )
    }
}

export default NotesProvider