import React from 'react';
import { connect } from 'react-redux';
import { getNote, editNote, deleteNote, setNull } from '../../actions';
import { Link } from 'react-router-dom';
import ModalContainer from '../ModalContainer/ModalContainer';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            tag: ''
        }
    }

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

    handleInput = event => {
        this.setState({ tag: event.target.value });
    }

    addTag = () => {
        if (this.state.tag === '') return;

        const note = { tags: this.props.note.tags, title: this.props.note.title, textBody: this.props.note.textBody, id: this.props.note._id }
        note.tags.push(this.state.tag);

        this.props.editNote(note);
        this.setState({ tag: '' });
    }

    deleteNote = () => {
        // Deletes note / Removes Modal / Takes back to notes
        this.props.deleteNote(this.props.note._id);
        this.toggleModal();
        this.props.history.push('/notes');
    }

    toggleModal = () => {
        // Toggles modal state 
        this.setState({ modal: !this.state.modal });
    }

    render() {
        // Displays single note / Modal
        return (
            <React.Fragment>
                {this.props.fetching ? <div>Loading info...</div> :
                    <div className='note-container'>

                        <ModalContainer modal={this.state.modal} deleteNote={this.deleteNote} toggleModal={this.toggleModal} />

                        <div className='note-links'>
                            <Link className='edit-link' to={this.props.note ? `/notes/${this.props.note._id}/edit` : null}>edit</Link>
                            <div onClick={this.toggleModal} className='delete-link' to='/delete'>delete</div>
                        </div>

                        <div className='title-tag-container'>

                            <h3 className='note-header'>{this.props.note.title}</h3>

                            <div className='note-tags-container'>

                                {this.props.note.tags ? this.props.note.tags.map((tag, index) =>
                                    <span className='note-tags' key={index}>{tag} <i className="fas fa-times"></i> </span>) : null}

                                <form className='add-tag-form' onSubmit={event => event.preventDefault()}>
                                    <input className='add-tag-field' onChange={this.handleInput} value={this.state.tag} type='text' placeholder='Add tag...' />
                                    <input onClick={this.addTag} type='submit' hidden />
                                </form>

                            </div>


                        </div>

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
        fetched: state.noteFetched
    }
}

export default connect(mapStateToProps, { getNote, editNote, deleteNote, setNull })(Note);