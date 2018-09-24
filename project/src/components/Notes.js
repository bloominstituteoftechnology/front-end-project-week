import React from 'react';
import './Notes.css';
import logo from '../logo.svg';

const Notes = (props) => {
return(
<div className="notes">
{props.notes ? (
<React.Fragment>
<div className="heading">Your Notes:</div>
<div className="notesContainer">
{props.notes.map((note,index)=>{
return(
<div key={Math.random(Date.now())} className="note">
<div className="title">{note.title}</div>
{note.content.length>200 ? (<div className="contents">{note.content.slice(0,250)}...</div>):(
<div className="contents">{note.content}</div>)}
</div>
);})}
</div>
</React.Fragment>
):(
<React.Fragment>
<div>getting notes...</div>
<img src={logo} className="App-logo" alt='' />
</React.Fragment>
)	
}
</div>
)
}

export default Notes