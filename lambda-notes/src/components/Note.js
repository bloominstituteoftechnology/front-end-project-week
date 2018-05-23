import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showNote: true
         }
    }

    updateDisplay = () => {
        this.state.showNote = !this.state.showNote;
        // this.setState({
        //     showNote: !this.state.showNote,
        // })
    }

    deleteNote = () => {
        return alert('Alert message!');
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
                    <Link onClick={this.updateDisplay()} to={`/note/${id}/edit`}>
                        edit
                    </Link>
                    <Link to='/delete'>
                        delete
                    </Link>
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