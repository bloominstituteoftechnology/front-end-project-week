import React, {Component} from 'react';
import { connect } from 'react-redux';
import DeleteModal from './DeleteModal';
import Modal from 'react-modal';
import * as actions from '../../Actions';
import './Notes.css';

class HandleNote extends Component {
    state = {
        title: '',
        text: '',
        enableEdit: false,
        delete: false
    };

    //handleOpenModal(){ this.setState({ showModal: true });};
    //handleCloseModal(){ this.setState({ showModal: false });};

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchNote(id);
      };

    componentDidUpdate(prevProps) {
        const { note } = this.props.notes;
        if (prevProps.notes.note !== note){
        console.log(note.title, note.textBody);//?
          this.setState({ title: note.title, text: note.textBody });
        }
      };

    handleSubmit = e => { 
        e.preventDefault();
        const { id } = this.props.match.params;
        const note = { title: this.state.title, textBody: this.state.text, tags: [] };
        this.props.updateNote(id, note);
        this.setState({ enableEdit: !this.state.enableEdit });
      };

    handleDelete = () => {
        const { id } = this.props.match.params;
        this.props.deleteNote(id);
        this.props.history.push('/');
      };
      
    handleCancel = () => {this.setState({ delete: false });};
      
    handleInput = e => {this.setState({ [e.target.name]: e.target.value });};
      
    handleEdit = () => {this.setState({ enableEdit: !this.state.enableEdit });};
    
    render() {
    const { note } = this.props.notes;
    return (
        <div className="viewnote-container">
        {this.state.delete ? (
        <DeleteModal 
            handleDelete={this.handleDelete}
            handleCancel={this.handleCancel}/>
            ): null}
        {this.state.enableEdit ? (
        <div className="newnote-container">
        <header className="edit-delete">
          <span onClick={this.handleEdit}>edit</span>
          <span onClick={this.handleOpenModal}>delete</span>
        </header>
        <h2>{note.title}</h2>
         <p>{note.textBody}</p>
         </div>
        ) : (
        <div className="newnote-container">
          <div className="p-top">
            <h2 className="edit-header">Edit Note: </h2>
            <form onSubmit={this.handleSubmit}>
                <input className="title-bar" 
                placeholder="Note Title"
                onChange={this.handleInput}
                value={this.state.title}
                name="title"
                type=""
                />
                <textarea className="note-contents" 
                placeholder="Note Content"
                onChange={this.handleInput}
                value={this.state.body} 
                name="text"
                />
            </form>
            <button className="form-button">Update</button>
          </div>
        </div>
        )}
    </div>
    )}
}

const mapStateToProps = state => ({
    notes: state
});

export default connect(mapStateToProps, actions)(HandleNote);