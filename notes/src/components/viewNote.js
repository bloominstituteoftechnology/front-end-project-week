import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NoteAlone extends Component {
render() {
    console.log(this.props)
    return (
        <div>
        <div className="deleteButton">
        <Link to={`/note/${this.props.location.state.currentNote.id}/edit`} className="spaces"> Edit </Link>
        <Link to="/"> Delete </Link>
        </div>
        <div className="rightSideCurrent">
        
    <h4>{this.props.location.state.currentNote.title}</h4>
    <p>{this.props.location.state.currentNote.text}</p>
    </div>
    </div>
    )
}
}
export default NoteAlone;