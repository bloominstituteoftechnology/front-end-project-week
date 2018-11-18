import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions/index';
import Note from './Note';
import '../src/index';
import { NotesContainer, StandardDiv } from './StyledComponents';


class Notes extends React.Component {
    componentDidMount(){
        this.props.getNotes();
    }

    render(){
        return(
            <StandardDiv>
                <h1>Your Notes:</h1>
                <NotesContainer>
                    {this.props.notes.map( note => 
                        < Note note={note} key={note._id} id={note._id} text={note.textBody} title={note.title} /> 
                    )}
                </NotesContainer>
            </StandardDiv>
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