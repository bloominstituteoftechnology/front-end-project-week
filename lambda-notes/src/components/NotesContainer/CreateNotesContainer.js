import React from 'react';
import NotesForm from './NotesForm';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

class CreateNotesContainer extends React.Component {
    componentWillUnmount() {
        setTimeout(() => {
            this.props.getNotes();
        }, 1)
    }

    render() {
        return (
            <div className='create-notes-container'>

                <h3 className='notes-header'>Create New Note:</h3>
                <div className='notes-cards'>
                    <NotesForm history={this.props.history} />
                </div>

            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { getNotes })(CreateNotesContainer);