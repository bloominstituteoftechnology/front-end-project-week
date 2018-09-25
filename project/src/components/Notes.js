import React from 'react';
import './Notes.css';
import OneNote from './OneNote';

const Notes = (props) => {
return(
<div className="notes">
{props.view==="all" ? (
<React.Fragment>
<div className="heading">All Notes:</div>
<div className="notesContainer">
{props.notes.map((note,index)=>{
return(
<div key={Math.random(Date.now())} className="note" onClick={()=>props.viewone(index)}>
<div className="title">{note.title}</div>
{note.content.length>200 ? (<div className="contents">{note.content.slice(0,250)}...</div>):(
<div className="contents">{note.content}</div>)}
</div>
);})}
</div>
</React.Fragment>
):(null)}
{props.view==="my" ? (
<React.Fragment>
<div className="heading">Your Notes:</div>
<div className="notesContainer">
	{props.notes.map((note,index)=>{
if(note.poster===props.loggedIn){
return(
<div key={Math.random(Date.now())} className="note" onClick={()=>props.viewone(index)}>
<div className="title">{note.title}</div>
{note.content.length>200 ? (<div className="contents">{note.content.slice(0,250)}...</div>):(
<div className="contents">{note.content}</div>)}
</div>
);}
else{return null}
})}
</div>
</React.Fragment>
):(null)}
{typeof props.view==="number" ? (
<OneNote index={props.view} deleteNote={props.deleteNote} editNote={props.editNote} note={props.notes[props.view]} loggedIn={props.loggedIn}/>
):(null)}
</div>
)
}


export default Notes