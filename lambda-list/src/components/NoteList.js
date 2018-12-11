import React from 'react';
import '../App.css';
import Note from './Note'
import styled from 'styled-components'

const Page = styled.div`
  margin: 6% 3%;

  
 
`


const NoteList = props => {
    return (
        <Page>
            <div className="page-header">
                <h3>Your Notes:</h3>
            </div>
            
            <div className="note-list">
                {props.notes.map(notes => {
                    return(
                        <Note 
                        key={notes.id}
                        tags={notes.tags}
                        title={notes.title}
                        textBody={notes.textBody}
                        />
                    )
                
                })}
                
            </div>
        </Page>
    )
}

export default NoteList;