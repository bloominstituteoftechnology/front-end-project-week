import React from 'react';
import NoteCard from '../components/NoteCard';
import { getAllNotes } from '../actions';
import { connect } from 'react-redux';

 
class NotesList extends React.Component {
    componentWillMount(){
        this.props.getAllNotes();
    }
    render(){
        if (this.props.notes){
            return(
                <div className="NotesList">
                    <h2>Your Notes:</h2>
                    <div>
                        {this.props.notes.map(note=> <NoteCard key={note._id} params={note} /> )}
                    </div>                   
                </div>
            )
        } else return null;
        
    }
}

const mapStateToProps= (state)=> {
    return(
        {
            getAllNotes: state.loadReducer.getAllNotes,
            notes: state.loadReducer.notes[0],
            notesFetched: state.loadReducer.notesFetched
        }
    )
}

export default connect(mapStateToProps, { getAllNotes })(NotesList);