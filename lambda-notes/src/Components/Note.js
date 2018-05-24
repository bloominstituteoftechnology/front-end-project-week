import React from 'react';
import NoteCard from "./NoteCard";
import { Link } from 'react-router-dom'
const Note = ( props ) => {
    console.log("Note", props)
    return (
        <div>
           <h3>Note Title</h3>
            <p>Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key</p>
            </div>
    )
}
 
export default Note;