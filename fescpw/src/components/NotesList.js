import React from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';

const PageContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const NotesListContainer = styled.div`
    width: 65%;
    margin: 0 auto;
`;

const NotesListHeader = styled.h1`
    margin: 2%;
    font-size: 2rem;
    font-weight: 900;
`;

const NoteContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const NoteCard = styled.div`
    width: 28%;
    height: 40vh;
    padding: 3%;
    margin: 2%;
    border: 1px solid lightgrey;
    overflow: scroll;
    -ms-overflow-style: none;  // IE 10+
    overflow: -moz-scrollbars-none;

    ::-webkit-scrollbar { 
        display: none;  // Safari and Chrome
    }
`;

const NoteCardHeader = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`;

const NoteCardContent = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
`;

const NoteCardTags = styled.small`
    font-size: .6rem;
    color: gray;
`;

 const NotesList = (props) => {
     if (!props.notes_array || !props.notes_array.length) {
         return <h1>Loading...</h1>
     }
  return (
      <PageContainer>
        <NotesListContainer>
            <NotesListHeader>Your Notes:</NotesListHeader>
            <NoteContainer>
                {props.notesFilter.map(note => (
                    <NoteCard key={note.id}>
                        <NoteCardHeader onClick={(event) => {
                            event.preventDefault();
                            props.noteFetch(note.id);
                            props.history.push(`/notes/${note.id}`);
                            }}>{note.title}</NoteCardHeader>
                            <Divider style={{height: 2, margin: 8}} />
                        <NoteCardContent>{note.textBody}</NoteCardContent>
                        <NoteCardTags>{note.tags}</NoteCardTags>
                    </NoteCard>
                ))}
            </NoteContainer>
        </NotesListContainer>
      </PageContainer>
  )
}

export default NotesList;