import React from 'react';
import styled from 'styled-components';

const NotesListWrapper = styled.div`
    margin: 20px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
`;
const NoteCard = styled.div`
    border: 2px solid lightgrey;
    width: 175px;
    height: 175px;
    margin: 20px;
    padding: 5px 10px;;
    background: #FFFFFF;
    overflow: hidden;
`;
const CardHeader = styled.h3`
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid lightgrey;
    padding-bottom: 5px;
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