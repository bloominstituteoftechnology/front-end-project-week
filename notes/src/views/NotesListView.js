import React from 'react';
import styled from 'styled-components';

import NotesList from '../components/NotesList';

const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 0px 20px;
`;

class NotesListView extends React.Component {


    render() {
        if(this.props.notes === undefined) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <NotesHeader>Your Notes:</NotesHeader>
                <NotesList notes={this.props.notes} {...this.props} />
            </div>
        );
    }
}

export default NotesListView;