import React, { Component } from 'react';
import './NoteCard.css';
import SingleNoteView from '../NoteView/SingleNoteView';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps=(state) =>{
    return(
        {notes: state}
    )
}

export const HeaderName = (props) => {
    return (
        <h3 className ={`${props.className}`}>{props.text}</h3>
    )
}

class NoteCards extends Component {
    constructor(){
        super();
        this.state ={
        }
    }

        componentWillMount(){
            let reversed=Array.from(this.props.notes.notes.note).reverse();
            console.log('reversed in CWM', reversed);
            this.setState({notes:reversed});
        }
    
    render(){
        console.log(this.state);
        return(
            <div className = "container">
            {this.props.notes.notes.note.map(note =>{
                return(
                    <div className="note-wrapper-container">
                    <div className="text-wrapper">
                    <Link to= {`/notes/${note.id}`} key={note.id} component={SingleNoteView}>
                        <h4 className="link-card">{note.note_title}</h4>
                    </Link>
                        <hr />
                        <p className = "text-body">{note.note_body}</p>
                    </div>
                    </div>
                    )
                }
                
            )} 
            </div>
        );
        
    }
    
}  


export default connect(mapStateToProps, {})(NoteCards);