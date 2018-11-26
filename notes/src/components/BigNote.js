import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getOneNote, deleteNote } from '../actions/noteActions';


class BigNote extends Component {
    constructor(props){
        super(props)

    }


    clickHandler = () => {
        // deleteNote(this.props.notes._id)
        const note = this.props.notes.find(item => {
            return item._id === this.props.match.params.id
        })
        this.props.deleteNote(note._id)
        this.props.history.push('/NoteList')
    }

    render(){
        const singleNote = this.props.notes.find(item => {
            return item._id === this.props.match.params.id
        })
       return(
            <div className="bigNote">
                <div>
                <Link to={`/update/${singleNote._id}`}>edit</Link>
                <button onClick={this.clickHandler}>Delete</button>
                </div>
                <h1>{singleNote.title}</h1>
                <p>{singleNote.textBody}</p>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notes:state.notes
    }
}

export default connect(mapStateToProps, {getOneNote, deleteNote})(BigNote)