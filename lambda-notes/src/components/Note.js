import React, { Component } from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    width: 200px;
    background: white;
    margin: 10px;
    padding: 0 10px;
    height: 210px;
    border: solid 1px lightgray;
    &:hover {
        cursor: pointer;
    }
`

const NoteTitle = styled.div`

    border-bottom: solid 1px lightgray;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bolder;
`

const NoteBody = styled.div`
    padding-top: 10px;
`

class Note extends Component  {
    // constructor(props)  {
    //     super(props)
    // }

    render()    {
        return(
                <NoteContainer>
                    <NoteTitle>
                        {this.props.note.title.length > 11 ? (this.props.note.title.slice(0, 11).trim() + "...") : this.props.note.title}
                    </NoteTitle>
                    <NoteBody>
                        {this.props.note.textBody.length > 200 ? (this.props.note.textBody.slice(0, 200).trim() + "...") : this.props.note.textBody}
                    </NoteBody>
                </NoteContainer>
        );
    }
}

export default Note;
