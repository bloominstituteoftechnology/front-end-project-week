import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/actions';
import styled from 'styled-components';

const NoteCard = styled.div`
    width: 27%;
    height: 250px;
    border: 1px solid #8e8b8b;
    padding: 10px 25px;
    margin-bottom: 35px;    
    text-align: start;
    background-color: #fbfafa;
    > div {
        border-bottom: 1px solid #8e8b8b;
        height: 35px;
        > h2 {
            margin: 0;
        }
    }
    > p {
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`

export default props => <NoteCard onClick={() => props.history.push(`/note/${props.id}`)} >
                            <div>
                                <h2>{props.title}</h2>
                            </div>                            
                            <p>{props.textBody}</p>
                        </NoteCard>