import React from 'react';
import styled from 'styled-components';

const List = styled.div`
    background: #F1F1F1;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`
const NoteOverview = styled.div`
    display: flex;
    background: #F1F1F1;
    max-width: 900px;
    justfiy-content: space-around;
`

const SmallNote = styled.div`
    height: 250px;
    border: 1px solid lightgray;
    text-align: left;
    background: white;
    overflow: hidden;
`
const Title = styled.div`
    font-weight: 800;
    border-bottom: 1px solid lightgray;
    padding: 0.5rem;
`
const Content = styled.div`
    padding: 0.5rem;    
    word-wrap: break-word;
`

class ListView extends React.Component{
    render(){
        return(
            <List>
                <h2>Your Notes:</h2>
                <NoteOverview style={{display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gridGap: '10px',
                                    gridAutoRows: 'minMax(100px, auto)'}}>
                    {this.props.notes.map((note, i) => {
                        return(
                            <SmallNote key={i}>
                                <Title>{note.title}</Title>
                                <Content>{note.content}</Content>
                            </SmallNote>
                        );
                    })}
                </NoteOverview>
            </List>
        );
    }

};

export default ListView;