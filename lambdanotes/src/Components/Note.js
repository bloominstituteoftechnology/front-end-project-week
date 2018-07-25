import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteBody = styled.div`
    width: 170px;
    border: 1px solid #BABABA;
    background white;
    height: 200px;
    margin-bottom: 25px;
    padding-top: 8px;
    padding-left: 15px;
    padding-right: 15px;
    text-decoration: none;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    line-height: 25px;
`;

const Content = styled.div`
    width: 100%;
    margin-top: 5px;
    padding-top: 8px;
    border-top: 2px solid #D0D0D0;
`;

class Note extends Component {
    render() {
        return ( 
            <Link 
                to={`/view-note/${this.props.note.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
            >
                <NoteBody>
                    <Title>{this.props.note.title}</Title>
                    <Content>{this.props.note.content}</Content>
                </NoteBody>
            </Link>
        );
    }
}
 
export default Note;