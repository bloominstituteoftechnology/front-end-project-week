import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

//Adding dragable elements

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            modal: false,
            editing: false,
            editedTitle: '',
            editedTextBody: ''
        }
        this.toggle = this.toggle.bind(this);
    }
componentDidMount() {
    const {id} = this.props.match.params;
    this.getNote(id)
}

getNote = id => {
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
        this.setState({ note: response.data})
    })
        .catch(error => console.log(error));
}

deleteNote = id => {
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log('response', response)
    })
    .catch(error => console.log(error))
}

editNote = id => {
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.note)
    .then(response => {
        console.log('response', response)
      this.setState({ note: response.data })
    })
    .catch(error => console.log(error))
}

toggle() {
    this.setState({
      modal: !this.state.modal
    });}

deleteHandler = event => {
      event.preventDefault();
      this.deleteNote(this.state.note._id);
      this.props.history.push('/')
}

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


editHandler = event => {
    event.preventDefault();
    this.setState({ editing: true, editedTitle: this.state.note.title, editedTextBody: this.state.note.textBody })
}

saveHandler = event => {
    event.preventDefault();
    this.setState({ editing: false, note: {title: this.state.editedTitle, textBody: this.state.editedTextBody, _id: this.state.note._id, tags: []} })
    setTimeout(() => { this.editNote(this.state.note._id); }, 500);
};

render(){
        let viewStyle = {};
        let editStyle = {};

        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }
    return(

            <div className="view-note">

            <div className="actions">
            <Button onClick={this.editHandler}>Edit</Button>
            <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Delete</Button>
            </div>

            <div style={viewStyle} onDoubleClick={this.editHandler}>
            <h2>{this.state.note.title}</h2>
            <p>{this.state.note.textBody}</p>

            </div>

                <div  className="edit-note">
                <form onSubmit={this.saveHandler}>
                <input
                className="title-input"
                name="editedTitle"
                type= "text"
                style={editStyle}
                onKeyDown={this.submitHandler}
                onChange={this.changeHandler}
                value={this.state.editedTitle}/>

                <textarea
                className="text-input"
                name="editedTextBody"
                type="textarea"
                style={editStyle}
                onKeyDown={this.submitHandler}
                onChange={this.changeHandler}
                value={this.state.editedTextBody}/>
                </form>

                <Button onClick={this.saveHandler} style={editStyle} className="update">Update</Button>
                </div>


            <div>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        Are you sure you want to delete this note?
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.deleteHandler}>Delete</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    
                    </ModalFooter>
                  </Modal>
                </div>
                </div>
        )                   
    }

    }


export default NoteView;