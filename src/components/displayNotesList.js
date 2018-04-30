import React from 'react';
import { connect } from 'react-redux';
import NotesList from './notesList';
import { Container } from 'reactstrap';

function mapStateToProps(state) {
    return {};
}

class DisplayNotesList extends React.Component{
    render() {
        return(
            <Container>
                <NotesList/>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(DisplayNotesList);