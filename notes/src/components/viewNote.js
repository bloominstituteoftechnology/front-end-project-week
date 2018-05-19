import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NoteAlone extends Component {
    noteDelete = () => {
        this.props.history.push('/')
    }
    
    componentDidMount() {
        let NoteId = this.props.match.params.id;
        console.log(NoteId);
        console.log(typeof NoteId);
        let item = this.props.notes.find(item => item.id === NoteId);
        console.log('item', item);
        console.log('props', this.props.notes);
    }
render() {
    console.log(this.props)
    const NoteId = this.props.match.params.id;
    const note = this.props.notes.find(item => item.id === NoteId);
    return (
        <div>
        <div className="deleteButton">
        <Link to="/editnote" className="spaces"> Edit </Link>
        <Link to="/" onClick={this.noteDelete}> Delete </Link>
        </div>
        <div className="rightSideCurrent">
        
    <h4>{note.title}</h4>
    <p>{note.text}</p>
    </div>
    </div>
    )
}
}



export default NoteAlone;