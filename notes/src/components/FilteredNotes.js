import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const List = styled.div`
    background: #F1F1F1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100vh;
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
`;

class FilteredNotes extends React.Component{
    render(){
        return(
            <List>
            <h2>Your Filtered Notes:</h2>
            <NoteOverview style={{display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gridGap: '10px',
                                gridAutoRows: 'minMax(100px, auto)'}}>
                {this.props.filtered.map(note => {
                    return(
                        <div>
                            <Link to={`/note/${note._id}`}
                                style={{ textDecoration: 'none',
                                        color: 'black' }}> 
                                <SmallNote key={note._id}>
                                    <Title>{note.title}</Title>
                                    <Content>{note.textBody}</Content>
                                </SmallNote>
                            </Link>
                        </div>
                    );
                })}
            </NoteOverview>
        </List>
        );
    }
}

export default FilteredNotes;