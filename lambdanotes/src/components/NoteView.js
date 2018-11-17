import React from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { deleteNote } from '../actions/noteAction'

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
        //this.props.handleDeleteNote(this.props.match.params.id)
        this.props.deleteNote(this.props.match.params.id)
    }

    render(){
        console.log(this.state.note)
        return (
            <div>
                <div className="note-menu">
                    <div><Link to={`/edit/${this.state.note._id}`}> edit </Link></div>
                    <div onClick={this.handleDelete}><Link to="/notes" style={{cursor: "pointer"}} > delete </Link></div>     
                </div>

                <div className="note-container">
                    <div key={this.state.note._id}>
                        <h2>Note Name: {this.state.note.title} </h2>
                        <p>Text Body: {this.state.note.textBody}</p>
                        <p>ID: {this.state.note._id}</p>
                        <p>Double_Underscore_V: {this.state.note.__v}</p>
                        <p>TAGS: {this.state.note.tags}</p>
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { deleteNote })(NoteView)

//export default NoteView