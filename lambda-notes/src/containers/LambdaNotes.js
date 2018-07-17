import React from 'react';
import styled from 'styled-components';

const ComponentContainer = styled.div`
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: #F3F3F3;
`

const HeaderStyle = styled.h3`
  border-bottom: 1px solid black;
  width: 80%;
  padding-bottom: 5px;
`
const NotesContainer = styled.div`
  width: 25%;
  height: 230px;
  padding-left: 20px;
  border: 1px solid #979797
`

const LambdaNotes = (props) => {
    return (
        <ComponentContainer>
            {props.notes.map(note => {
                return (
                    <NotesContainer>
                        <div key={note.id}>
                            <HeaderStyle>{note.title}</HeaderStyle>
                            <p>{note.body}</p>
                        </div>
                    </NotesContainer>
                )

            })}
        </ComponentContainer>
    )
}

export default LambdaNotes;