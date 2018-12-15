import React from 'react';
import styled from 'styled-components';

// #region Styled Components
const NotesListWrapper = styled.div`
    margin-top: 0px;
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
const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 0px 20px;
`;
const SortContainer = styled.div`
    display: flex;
    margin: 20px 0 0 20px;
    align-items: baseline;
`;
const SortButton = styled.button`
    margin-left: 5px;
    border: none;
    background: none;
    font-size: 10px;
    :hover {
        cursor: pointer;
        text-decoration: underline;
        color: #25B7BD;
    }
`;
const NotesCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const SearchInput = styled.input`
    border: 2px solid lightgrey;
    font-size: 14px;
    border-radius: 5px;
    padding: 5px;
    width: 300px;
    margin-left: 100px;
    :focus {
        width: 700px;
        background-color: #25B7BD;
        border: 2px solid white;
    }
`;

// #endregion Styled Components

class NotesList extends React.Component {

    render() {
        if(this.props.notes === undefined || this.props.fetchingNotes === true) {
            return (
                <NotesListWrapper>
                    <NotesHeader>Your Notes:</NotesHeader>
                    <SortContainer>
                        <p>sort: </p>
                        <SortButton onClick={this.props.sortNotes}>{this.props.sortText}</SortButton>
                        <SearchInput type="search" placeholder="Search..." onKeyDown={this.props.searchNotes} />
                    </SortContainer>
                    <NotesCardsWrapper>
                        
                    </NotesCardsWrapper>
                </NotesListWrapper>
            )
        }
        return (
            <NotesListWrapper>
                <div ref={div => this.myElement = div} />
                <NotesHeader>Your Notes:</NotesHeader>
                <SortContainer>
                    <p>sort: </p>
                    <SortButton onClick={this.props.sortNotes}>{this.props.sortText}</SortButton>
                    <SearchInput type="search" placeholder="Search..." onKeyDown={this.props.searchNotes} />
                </SortContainer>
                <NotesCardsWrapper>
                    {this.props.notes.map(note => (     
                        <NoteCard onClick={() => this.props.history.push(`/note/${note._id}`)} key={note._id}>
                            <CardHeader>{note.title}</CardHeader>
                            <CardBody>{note.textBody}</CardBody>
                        </NoteCard>
                    ))}
                </NotesCardsWrapper>
            </NotesListWrapper>
                
        );
    }
}

export default NotesList;