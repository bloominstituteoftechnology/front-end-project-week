import React from 'react';
import { connect } from 'react-redux';
import { getNote, getNotes, editNote, deleteNote, setNull } from '../../actions';
import ModalContainer from '../ModalContainer/ModalContainer';
import NotesCheckList from './NotesCheckList';
import { NotesWrapper, NoteLinksContainer, NoteEditLink, NoteDeleteLink, HeaderContainer, HeaderTitle, HeaderTagsContainer, HeaderTags, HeaderTagForm, HeaderTagInput, NoteContent, NoteCheckListForm, NoteCheckListInput } from '../ReusableComponents/Note';

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
        // Gets note from the server / Checklist from local storage
        if (this.props.match) {
            this.props.getNote(this.props.match.params.id);
            if (localStorage.getItem('checkedlist' + this.props.match.params.id)) {
                this.setState({ checklist: JSON.parse(localStorage.getItem('checkedlist' + this.props.match.params.id)) });
            } else {
                localStorage.setItem('checkedlist' + this.props.match.params.id, JSON.stringify(this.state.checklist));
            }
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
        const note = { tags: this.props.note.tags, title: this.props.note.title, content: this.props.note.content, id: this.props.note.id }

        note.tag = { tag: this.state.tag, note_id: this.props.note.id };
        this.props.editNote(note);
        this.setState({ tag: '' });
    }

    deleteTag = (index, tagId) => {
        // Deletes tag with splice
        const note = { tagId, title: this.props.note.title, content: this.props.note.content, id: this.props.note.id, tags: this.props.note.tags }
        note.tags.splice(index, 1);
        this.props.editNote(note);
    }

    deleteNote = () => {
        // Deletes note / Removes Modal / Takes back to notes
        this.props.deleteNote(this.props.note.id, this.props.history);
        this.toggleModal();
    }

    toggleModal = () => {
        // Toggles modal state 
        this.setState({ modal: !this.state.modal });
    }

    addList = () => {
        // Adds list to state / localstorage
        if (this.state.list === '') return;
        const checklist = this.state.checklist.slice();
        checklist.push({ list: this.state.list, id: checklist.length + 1 });

        this.setState({ checklist, list: '' });
        localStorage.setItem('checkedlist' + this.props.match.params.id, JSON.stringify(checklist));
    }

    deleteList = index => {
        // Deletes list / Updates checkedlist / Removes checked in localstorage
        const checklist = this.state.checklist.slice();
        localStorage.removeItem('checked' + checklist[index].id + this.props.match.params.id);
        checklist.splice(index, 1);

        this.setState({ checklist });
        localStorage.setItem('checkedlist' + this.props.match.params.id, JSON.stringify(checklist));
    }

    render() {
        // Displays single note / Modal
        return (
            <React.Fragment>
          
                {this.props.fetching ? <div>Loading info...</div> :
                    <NotesWrapper>

                        <ModalContainer modal={this.state.modal} deleteNote={this.deleteNote} toggleModal={this.toggleModal} />

                        <NoteLinksContainer>
                            <NoteEditLink to={this.props.note ? `/notes/${this.props.note.id}/edit` : null}>edit</NoteEditLink>
                            <NoteDeleteLink onClick={this.toggleModal}>delete</NoteDeleteLink>
                        </NoteLinksContainer>

                        <HeaderContainer>

                            <HeaderTitle>{this.props.note.title}</HeaderTitle>

                            <HeaderTagsContainer>
                                {/*Maps over tags and displays them on screen along with a close icon from font-awesome*/}
                                {this.props.note.tags ? this.props.note.tags.map((tag, index) =>
                                    <HeaderTags key={index + Math.random()}>{tag.tag}<i onClick={() => this.deleteTag(index, tag.id)} className="fas fa-times"></i> </HeaderTags>) : null}

                                <HeaderTagForm onSubmit={event => event.preventDefault()}>
                                    <HeaderTagInput onChange={this.handleInput} value={this.state.tag} type='text' name='tag' placeholder='Add tag...' />
                                    <input onClick={this.addTag} type='submit' hidden />
                                </HeaderTagForm>

                            </HeaderTagsContainer>

                        </HeaderContainer>

                        <NoteContent>{this.props.note.content}</NoteContent>

                        <NoteCheckListForm onSubmit={event => event.preventDefault()}>
                            <h3>Checklist:</h3>
                            {this.state.checklist.map((list, index) =>
                                <NotesCheckList
                                    key={list + index}
                                    list={list}
                                    id={list.id + this.props.match.params.id}
                                    index={index}
                                    deleteList={this.deleteList} />)}
                            <NoteCheckListInput onChange={this.handleInput} value={this.state.list} name='list' type='text' placeholder='Add a list' />
                            <input onClick={this.addList} type='submit' hidden />
                        </NoteCheckListForm>

                    </NotesWrapper>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.notes.note,
        fetching: state.notes.fetchingNote
    }
}

export default connect(mapStateToProps, { getNote, getNotes, editNote, deleteNote, setNull })(Note);