import React from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote, setNull } from '../../actions';
import { Link } from 'react-router-dom';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        this.props.setNull();
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.note._id);
        this.props.history.push('/notes');
        this.setState({ modal: false });
    }

    render() {
        return (
            <React.Fragment>
                {this.props.fetching || this.props.editing ? <div>Loading info...</div> :
                    <div className='note-container'>

                        <div className='modal' style={this.state.modal ? { display: 'block' } : null}>

                            <div className="modal-content">
                                <p className='modal-text'>Are you sure you want to delete this?</p>

                                <div className='modal-buttons'>
                                    <button onClick={this.deleteNote} className='delete-button'>Delete</button>
                                    <button onClick={() => this.setState({ modal: false })} className='cancel-button'>No</button>
                                </div>

                            </div>

                        </div>

                        <div className='note-links'>
                            <Link className='edit-link' to={this.props.note ? `/notes/${this.props.note._id}/edit` : null}>edit</Link>
                            <div onClick={() => this.setState({ modal: !this.state.modal })} className='delete-link' to='/delete'>delete</div>
                        </div>

                        <h3 className='note-header'>{this.props.note.title}</h3>
                        <p className='notes-paragraph'>{this.props.note.textBody}</p>

                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        fetching: state.fetchingNote,
        editing: state.editingNote
    }
}

export default connect(mapStateToProps, { getNote, deleteNote, setNull })(Note);