import React from 'react';
import './NoteView.css';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
        };
        console.log("NoteView", props);
    }
    
    componentDidMount() {
        const note = this.state.notes.find(note => note.id == this.props.match.params.id);
        console.log("note", note)
        if (!note) return;
        this.setState({note});
    }
    
     render() {
        return (
            <div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
            </div>
        );
    }
};

 export default NoteView; 