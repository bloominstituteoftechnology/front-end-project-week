import React, { Component } from 'react';
import NoteList from './noteList';

const NoteListView = (props) => {
        const mainBar = {
            backgroundColor : "#F3F3F3",
            height : "100vh",
            width : "75vw",
          }
        return (

            <div className ="col-md-9" style ={mainBar}>
                <h1 className ="m-4 font-weight-bold" >Your Notes:</h1>
                <div className ="d-flex flex-row flex-wrap pl-4 " >
                    {props.noteList.map( note => {
                        return <NoteList title ={note.title} noteBody ={note.noteBody} />
                    })}
               </div>
            </div>
         )
}
export default NoteListView;

