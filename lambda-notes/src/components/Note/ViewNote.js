import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import NoteCard from './NoteCard';
import NoteForm from './NoteForm';

class VieNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.notes.forEach((note) => {
            if(note.id == id)
                this.setState({note: note})
        } )
      }
    
    render() { 
        return (
            <div className="App-content-container">
                <div className="nav">
                    <Link to={`/editnote/${this.state.note.id}`}>edit</Link>
                    <Link to="/">delete</Link>
                </div>
                <NoteCard note={this.state.note}/>
            </div>
        )
    }
}
 
export default VieNote;