import React from 'react';
import styled from 'styled-components';

import NotesList from '../components/NotesList';

const NotesHeader = styled.h2`
    font-weight: bold;
    font-size: 20px;
    margin: 50px 0 0px 20px;
`;

class NotesListView extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filteredNotes: []
    //     }
    // }

    // searchNotes = event => {
    //     const searchNotes = this.props.notes.filter(note => {
    //         if(note.textBody.inclues(event.target.value)) {
    //             return note;
    //         }
    //     });
    //     this.setState({ filteredNotes: searchNotes})
    // }

    render() {
        if(this.props.notes === undefined) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <NotesHeader>Your Notes:</NotesHeader>
                {/* <NotesList {...this.props} /> */}
                <NotesList notes={this.props.notes} />
            </div>
        );
    }
}

export default NotesListView;