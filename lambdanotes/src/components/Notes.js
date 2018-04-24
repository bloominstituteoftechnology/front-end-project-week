import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f2f1f2;
  width: 75%;
  padding: 60px 0 70px 2.4em;
`;

const Heading = styled.h3`
    font-size: 2em;
    font-weight: bold;
    line-height: 0.8;
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
`
const IndividualNote = styled.div`
    width: 30%;
    background-color: #FFF;
    padding: 12px 2em 63px 2em;
    margin: 1px 1.7em 27px 0.2em;
`;

const NoteHeading = styled.h3`
    font-weight: bold;
    font-size: 2em;
`;

const NoteParagraph = styled.p`
    font-size: 1.4em;
    margin-top: 10px;
`;

class Notes extends Component {
    render() {
        return <Wrapper>
            <Heading>Your Notes:</Heading>
            <List>
                {this.props.notes.map(note => {
                    return (
                        <IndividualNote key={note.id}>
                            <NoteHeading>{note.title}</NoteHeading>
                            <hr />
                            <NoteParagraph>{note.text}</NoteParagraph>
                        </IndividualNote>
                    )
                })}
            </List>
            </Wrapper>;
    }
};

export default Notes;
