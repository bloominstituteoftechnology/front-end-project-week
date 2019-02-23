import React, { Component } from 'react';
import '../App.css';
//import ReactDom from 'react-dom';
// import axios from 'axios';

class NoteList extends Component {
    
    renderNotes = (props) => {
        if(this.props.content.length > 0){
            return(
                <div className='note-list'>
                    {this.props.content.map((note) => {
                        return(
                            <div 
                                className='note' 
                                key={note.id} 
                                onClick={()=> {
                                    this.props.history.push(`/notes/${note.id}`)                            
                                }} 
                            >
                                <h2>{note.title}</h2>
                                <div>{note.note}</div>
                            </div>
                        )
                    })}
                    
                </div>
            )
        } else {
            return (
                <div>No Notes Here!</div>
            )
        }
    }

    render() {
        return(
            this.renderNotes(this.props.content)
        )
    }

}

export default NoteList;