import React from 'react';
import { connect } from 'react-redux';
import { handleId } from '../actions/actions';
import styled from 'styled-components';
import { Markup } from 'interweave';

const NoteCard = styled.div`
    width: 27%;
    height: 250px;
    border: 1px solid #8e8b8b;
    padding: 10px 25px;
    margin-bottom: 35px;    
    text-align: start;
    background-color: #fbfafa;
    cursor: pointer;
    > div {
        height: 35px;
        > h2 {
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-wrap: break-word;
            text-overflow: ellipsis;
        }
    }
    > p {
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`

const Note = props => <NoteCard onClick={() => {props.history.push(`/note/${props.id}`);props.handleId(props.id)}} >
                            <div>
                                <h2>{props.title}</h2>
                            </div>
                            <hr></hr>                            
                            <Markup content={props.textBody} />
                        </NoteCard>

export default connect(()=>{return{}}, {handleId})(Note);