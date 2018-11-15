import React from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

class NoteView extends React.Component {
    constructor(){
        super();
        this.state ={
            note: {}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState({ note: response.data })
        })
        .catch(err => {
            console.log("Fail to Get INDIVIDUAL note", err)
        })
    }


    handleDelete = event => {
        event.preventDefault();
        this.props.handleDeleteNote(this.props.match.params.id)
    }

    render(){
        return (
            <div key={this.state.note._id}>
                <h2>Title: {this.state.note.title} </h2>
                <p>Text Body: {this.state.note.textBody}</p>
                <p>ID: {this.state.note._id}</p>
                <p>Double_Underscore_V: {this.state.note.__v}</p>
                <div onClick={this.handleDelete}><Link to="/notes" style={{cursor: "pointer"}} > X </Link></div>
            </div>
        )
    } 
}

export default NoteView