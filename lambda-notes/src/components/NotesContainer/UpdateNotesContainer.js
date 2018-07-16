import React from 'react';
import NotesForm from './NotesForm';
import { connect } from 'react-redux';
import { getNote, setNull } from '../../actions';

class UpdateNotesContainer extends React.Component {
    componentDidMount() {
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.setNull();
    }

    render() {
        return (
            <React.Fragment>
                {this.props.fetching ? <div>Fetching data</div> :
                    <div className='create-notes-container' >

                        <h3 className='notes-header'>Edit Note:</h3>
                        <div className='notes-cards'>
                            <NotesForm history={this.props.history} title={this.props.note.title} content={this.props.note.textBody} id={this.props.note._id}/>
                        </div>
                    </div >
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