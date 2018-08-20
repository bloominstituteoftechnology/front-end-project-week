import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

const StyledNoteCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    border: 2px solid grey;
    padding: 2%;
    box-shadow: 5px 10px 50px #888888;
    width: 190px;
    height: 190px;
    max-height: 190px;
    overflow: hidden;
    &:before{
        background:linear-gradient(transparent 150px, white);
    }
    
`;

const StyledTitle = styled.h4`
    border-bottom: 1px solid grey;
    margin: 1%;
    padding: 1%;
    width: 100%;
`;

const StyledText = styled.p`
    font: Raleway Medium;
`;
class NoteCard extends Component {

    render(){
        let { id, title, textBody } = this.props.note
        return(
            <StyledNoteCard >
                <Link to={`/notes/${id}` }
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <StyledTitle><Markdown options={{ forceBlock: true }}>{title}</Markdown></StyledTitle></Link>
                    <StyledText><Markdown options={{ forceBlock: true }}>{textBody}</Markdown></StyledText>
                
            </StyledNoteCard>

        );
    }
    
}

export default NoteCard;