import React from 'react';
import styled from 'styled-components';

const NotesListWrapper = styled.div`
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
`;
const NoteCard = styled.div`
    border: 2px solid lightgrey;
    width: 190px;
    height: 175px;
    margin: 20px;
    padding: 8px 10px;
    background: #FFFFFF;
    overflow: hidden;
    :hover {
        cursor: pointer;
        background: #25B7BD;
    }
`;
const CardHeader = styled.h3`
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid lightgrey;
    padding-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
`;
const CardBody = styled.p`
    font-size: 12px;
    padding: 10px 0;
`;

class NotesList extends React.Component {

    render() {
        if(this.props.notes === undefined) {
            return <div>Loading...</div>
        }
        return (
            <NotesListWrapper>
                {this.props.notes.map(note => (
                    <NoteCard onClick={() => this.props.history.push(`/note/${note._id}`)} key={note._id}>
                    <CardHeader>{note.title}</CardHeader>
                    <CardBody>{note.textBody}</CardBody>
                    </NoteCard>
                ))}
            </NotesListWrapper>
        );
    }
}

export default NotesList;