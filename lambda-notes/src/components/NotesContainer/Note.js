import React from 'react';
import { connect } from 'react-redux';
import { getNote, getNotes, editNote, deleteNote, setNull } from '../../actions';
import { Link } from 'react-router-dom';
import ModalContainer from '../ModalContainer/ModalContainer';
import NotesCheckList from './NotesCheckList';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            checklist: [],
            tag: '',
            list: ''
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
        this.setState({ [event.target.name]: event.target.value });
    }

    addTag = () => {
        // Adds tag with push
        if (this.state.tag === '') return;

        const note = { tags: this.props.note.tags, title: this.props.note.title, textBody: this.props.note.textBody, id: this.props.note._id }
        note.tags.push(this.state.tag);

        this.props.editNote(note);
        this.setState({ tag: '' });
    }

    deleteTag = index => {
        // Deletes tag with splice
        const note = { tags: this.props.note.tags, title: this.props.note.title, textBody: this.props.note.textBody, id: this.props.note._id }
        note.tags.splice(index, 1);

        this.props.editNote(note);
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

    addList = () => {
        if (this.state.list === '') return;
        const checklist = this.state.checklist.slice();
        checklist.push(this.state.list);

        this.setState({ checklist, list: '' });
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
                                {/*Maps over tags and displays them on screen along with a close icon from font-awesome*/}
                                {this.props.note.tags ? this.props.note.tags.map((tag, index) =>
                                    <span className='note-tags' key={tag + index + Math.random()}>{tag} <i onClick={() => this.deleteTag(index)} className="fas fa-times"></i> </span>) : null}

                                <form className='add-tag-form' onSubmit={event => event.preventDefault()}>
                                    <input className='add-tag-field' onChange={this.handleInput} value={this.state.tag} type='text' name='tag' placeholder='Add tag...' />
                                    <input onClick={this.addTag} type='submit' hidden />
                                </form>

                            </div>


                        </div>

                        <p className='notes-paragraph'>{this.props.note.textBody}</p>

                        <form className='checklist-form' onSubmit={event => event.preventDefault()}>
                            <h3>Checklist:</h3>
                            {this.state.checklist.map((list, index) => <NotesCheckList key={list + index} list={list} />)}
                            <input className='checklist-input' onChange={this.handleInput} value={this.state.list} name='list' type='text' placeholder='Add a checklist' />
                            <input onClick={this.addList} type='submit' hidden />
                        </form>

                    </div>
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

export default connect(mapStateToProps, { getNote, getNotes, editNote, deleteNote, setNull })(Note);