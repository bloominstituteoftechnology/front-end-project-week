import React from 'react';
import '../App.css';
import styled from 'styled-components'
import NoteMenu from './NoteMenu'




const Page = styled.div`
  
  width: 100%;
  margin: 2% 3%;
  

`



export const SingleNote = props => {
    console.log("Single Note", props.notes)
    const note = props.notes.find(note => `${note._id}` === props.match.params.noteID);
    console.log('Note: ', note)
    if (note === undefined) {
        return <h1>Loading...</h1>
    } else {
        return  (
            
            <Page className='single-note'>
                <NoteMenu deleteNote={props.deleteNote} editNote={props.editNote} noteID={props.match.params.noteID} props={props}/>
                
                <div className='note-title-single'>
                    <h3>{note.title}</h3>
                </div>

                <div>
                    <p>{note.textBody}</p>
                </div>
            </Page>
            
        )  
    }

}






