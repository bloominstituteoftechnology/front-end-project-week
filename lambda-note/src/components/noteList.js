import React, { Component } from 'react';
import Note from './note';

const NoteList = (props) => {
        return (
            <div>
                <h1 className ="m-4 font-weight-bold" >Your Notes:</h1>
                <div className ="d-flex flex-row flex-wrap pl-4 " >
                    {props.noteList.map( note => {
                        return <Note title ={note.title} noteBody ={note.noteBody} id ={note.id} />
                    })}
               </div>
            </div>
         )
}
export default NoteList;
