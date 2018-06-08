import React, { Component } from 'react';
import './NoteCard.css';
import SingleNoteView from '../NoteView/SingleNoteView';
import {fetchNote} from '../../JS/actions/index-a';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps=(state) =>{
    return(
        {notesRedux: state}
    )
}

export const HeaderName = (props) => {
    return (
        <h3 className ={`${props.className}`}>{props.text}</h3>
    )
}

class NoteCards extends Component {
    constructor(props){
        super(props);
        this.state ={
            notes:[]
        }
    }

        componentWillMount(){
            console.log("CWM", this.props.notesRedux.note)
        let reversed = this.props.notesRedux.note.reverse();
        return this.setState({notes: reversed})
        }
 
    render(){
       console.log("NoteCardsPROPS", this.props.notesRedux.note);
        return(
            <div className = "container">
            {this.state.notes.map(noteItem =>{
                return(
                    <div className="note-wrapper-container">
                    <div className="text-wrapper">
                    <Link to= {`/notes/${noteItem.id}`} key={noteItem.id} history = {this.props.history} component={SingleNoteView}>
                        <h4 className="title">{noteItem.note_title}</h4>
                    </Link>
                        <hr />
                        <p className = "body-note">{noteItem.note_body}</p>
                    </div>
                    </div>
                    )
                }
                
            )} 
            </div>
        );
        
    }
    
}  


export default connect(mapStateToProps, {fetchNote})(NoteCards);