import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {setCurrentNote} from '../actions/actions';

const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 192px;
    height: 180px;
    margin-bottom: 20px;
    border: 2px solid #d7d7d7;
    cursor: pointer;

    h3{
        margin: 10px 18px 5px 18px;
        padding-bottom: 8px;
        font-size: 1.8rem;
        color: #0a0908;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-bottom: 2px solid #bdbdbd;
    }

    p{
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        font-size: 1.4rem;
        margin: 5px 18px 0 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #0a0908;
    }
`;

const NoteCard = props=>{
    function selectNote(event){
        event.preventDefault();
        props.setCurrentNote(props.note);
        props.history.push(`/note/${props.note.id}`);
    }
    
    return(
        <NoteContainer onClick={selectNote}>
            <h3>{props.note.note_title}</h3>
            <p>{props.note.note_content}</p>
        </NoteContainer>
    )
}

const mapStateToProps = state=>{
    return {}
}

export default withRouter(connect(mapStateToProps, {setCurrentNote})(NoteCard));