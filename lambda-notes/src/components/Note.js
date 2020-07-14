import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import { DeleteNote } from '.';
import axios from 'axios';


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showNote: true
         }
    }

    // componentDidMount() {
    //     this.fetchNote();
    // }

    // fetchNote = () => {
    //     axios.get(`https://killer-notes.herokuapp.com/note/get/id`)
    //         .then( response => {
    //             console.log('respone', response)
    //         })
    // }

    updateDisplay = () => {
        this.state.showNote = !this.state.showNote;
    }

    render() { 
        const id = this.props.match.params.id;
        const { title, body } = this.props.notes[id];

        if(this.state.showNote === false){
            return <span></span>;
        }

        return (
            <div className='note-container'> 
                <div className="note-links">
                    <Link className='edit-delete' onClick={this.updateDisplay()} to={`/note/${id}/edit`}>
                        Edit
                    </Link>
                       <DeleteNote />
                    
                    
                </div>
                <div className="view-note">
                    <h2> {title} </h2>
                    <p>{body}</p>
                </div>
            </div>    
        )
    }
}
 
export default Note;