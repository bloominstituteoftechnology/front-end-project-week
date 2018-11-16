import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions/index';
import Note from './Note';
import { NoteContainer, H2Header } from './StyledComponents';


class Notes extends React.Component {
    componentDidMount(){
        this.props.getNotes();
    }

    render(){
        return(
            <NoteContainer>
                <H2Header>Your Notes:</H2Header>
                {this.props.notes.map( note => 
                    < Note note={note} key={note._id} id={note._id} text={note.textBody} title={note.title} /> 
                )}
            </NoteContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getNotes })(Notes);