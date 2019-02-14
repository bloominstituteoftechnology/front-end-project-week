import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import { DeleteLambdaNote } from '.';
// eslint-disable-next-line
import axios from 'axios';


class LambdaNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showNote: true
         }
    }

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
                       <DeleteLambdaNote />
                    
                    
                </div>
                <div className="view-note">
                    <h2> {title} </h2>
                    <p>{body}</p>
                </div>
            </div>    
        )
    }
}
 
export default LambdaNote;