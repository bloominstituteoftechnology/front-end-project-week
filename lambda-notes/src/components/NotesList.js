import React from 'react';
import NoteCard from '../components/NoteCard';


const NotesList = props => {
   

    return (
        <div className="row">
          {props.list.map((note, i)=> {
            return (
            <div key={i} className="col-sm-6 col-md-4"> <NoteCard title={note.title} note={note.note}/> </div>
            ) 
          })}  
        </div>    
    );
    
}

export default NotesList;