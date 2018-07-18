import React from 'react';
import NotesForm from './NotesForm';
import { connect } from 'react-redux';
import { getNote, setNull } from '../../actions';
import { NotesWrapper } from '../ReusableComponents/Note';
import { MainNotesHeader, NotesCards } from '../ReusableComponents/Notes';

class UpdateNotesContainer extends React.Component {
    componentDidMount() {
        // Gets note from the server
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        // Removes note when unmounted
        this.props.setNull();
    }

    render() {
        // Displays form when updating a note
        return (
            <React.Fragment>
                {this.props.fetching ? <div>Fetching data</div> :
                    <NotesWrapper>

                        <MainNotesHeader>Edit Note:</MainNotesHeader>
                        <NotesCards>
                            <NotesForm
                                history={this.props.history}
                                title={this.props.note.title}
                                content={this.props.note.textBody}
                                id={this.props.note._id}
                                tags={this.props.note.tags} />
                        </NotesCards>

                    </NotesWrapper>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        fetching: state.fetchingNote
    }
}

export default connect(mapStateToProps, { getNote, setNull })(UpdateNotesContainer);