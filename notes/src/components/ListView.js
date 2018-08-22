import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Draggable from 'react-draggable';
const ReactMarkdown = require('react-markdown');

const List = styled.div`
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    width: 900px;
`;
const NoteOverview = styled.div`
    display: flex;
    background: #F1F1F1;
    max-width: 900px;
    justfiy-content: space-around;
`;
const SmallNote = styled.div`
    height: 250px;
    width: 250px;
    border: 1px solid lightgray;
    text-align: left;
    background: white;
    overflow: hidden;
    line-height: 2rem;
    margin: 0.5rem;
`;
const Title = styled.div`
    font-weight: 800;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
    background: lightgray;
`;
const Content = styled.div`
    padding: 0.5rem;
    margin: 0.5rem 1rem;
    word-wrap: break-word;
    width: 100%;
    height: 100%;
`;

class ListView extends React.Component{
    render(){
        return(
            <div>
                <List>
                    <h2>Your Notes:</h2>
                    <NoteOverview style={{display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gridGap: '10px',
                                        gridAutoRows: 'minMax(100px, auto)'}}>
                        {this.props.notes.map(note => {
                            return(
                                
                                <Draggable>      
                                        <SmallNote key={note._id}>
                                            <Title>{note.title}</Title>
                                            <Link to={`/note/${note._id}`}
                                                  style={{ textDecoration: 'none',
                                                           color: 'black' }}>
                                                <Content><ReactMarkdown source={note.textBody} /></Content>
                                            </Link>
                                        </SmallNote>
                                </Draggable>
                            );
                        })}
                    </NoteOverview>
                </List>
            </div>
        );
    }

};

export default ListView;