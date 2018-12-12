import React from 'react';
import styled from 'styled-components';

import NotesList from '../components/NotesList';

const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 0px 20px;
`;
const SortContainer = styled.div`
    display: flex;
    margin: 20px 0 0 20px;
`;
const SortButton = styled.button`
    margin-left: 5px;
    border: none;
    background: none;
    font-size: 10px;
`;

class NotesListView extends React.Component {


    render() {
        if(this.props.notes === undefined) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <NotesHeader>Your Notes:</NotesHeader>
                <SortContainer>
                    <p>sort: </p>
                    <SortButton onClick={this.props.sortNotes}>{this.props.sortText}</SortButton>
                    {/* <SortButton>oldest</SortButton> */}
                </SortContainer>
                <NotesList notes={this.props.notes} {...this.props} />
            </div>
        );
    }
}

export default NotesListView;