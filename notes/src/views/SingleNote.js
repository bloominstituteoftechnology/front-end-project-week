import React from "react";
import NotesList from '../components/NotesList/NotesList';
import './SingleNote.css';
import { connect } from 'react-redux';  
import { deleteNote } from '../store/actions';


class SingleNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: {},
            
        };
    }

    componentDidMount() {
        let myId;
        if(this.props.noteId) {
            myId=this.props.noteId;
        } else {
            myId = this.props.match.params.noteId;
        }
        const foundNote = this.props.notesList.find(note => note.title === myId);
        if(!foundNote) return;
        this.setState({ note: foundNote});
    }
    

    handleDeleteNote = title => {
        this.props.deleteNote(this.state.note.title);
        console.log('Title: ', this.state.note.title);
        this.props.history.push('/notes');
    }
    

    render() {
        console.log(this.props);
        const {title, text} = this.state.note
        return(
        <div className='active' >
            <button onClick={this.handleDeleteNote}>Delete</button>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { deleteNote })(SingleNote);