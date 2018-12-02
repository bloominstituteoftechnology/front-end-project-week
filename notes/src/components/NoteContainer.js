import React from 'react'


const NoteContainer = props => {
     return(
         <div>
             <h3>{props.title}</h3>
             <p>{props.text}</p>
         </div>
     )
}

export default NoteContainer;