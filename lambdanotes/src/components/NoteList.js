import React from 'react';
import '../App.css';
//import ReactDom from 'react-dom';
// import axios from 'axios';

function NoteList(props) {
    
    return(
        <div className='note-list'>
            {props.content.map((note) => {
                return(
                    <div 
                        className='note' 
                        key={note.id} 
                        onClick={()=> {
                            props.history.push(`/notes/${note.id}`)                            
                        }} 
                    >
                        <h2>{note.title}</h2>
                        <div>{note.note}</div>
                    </div>
                )
            })}
            
        </div>
    )

}

export default NoteList;