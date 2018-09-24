import React from "react";
import NotesList from '../components/NotesList/NotesList';
import './SingleNote.css';
import { connect } from 'react-redux';  


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
    
    
   
    

    render() {
        console.log(this.props);
        const {title, text} = this.state.note
        return(
        <div className='active' >
            <button>Delete</button>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps)(SingleNote);