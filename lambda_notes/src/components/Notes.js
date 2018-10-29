import React from 'react';
import { Link } from 'react-router-dom';

 
 class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
          
        };
    }
     componentDidMount() {
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        if (!note) return;
        this.setState({ note });
    }

    render() {
        const{title, text, id} = this.state.note;
        return (
        <div className="note-wrapper">
            <div className="notes">
            <Link to={`/notes/${id}/edit`} className="update-button" >
                    Edit
                </Link>
            <button className="delete-button" >
                Delete
            </button>
            <h2 className="note-title">
                    <p>{title}</p>
                </h2>
                <h2 className="note-text">
                    <p>{text}</p>
                </h2>
                
            </div>
        </div>
    );
    }
    
}

export default Note; 