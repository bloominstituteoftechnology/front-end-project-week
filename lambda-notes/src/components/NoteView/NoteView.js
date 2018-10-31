import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
          modal: false,
          editing: false,
          editedTitle: '',
          editedTextBody: ''
        };
        this.toggle = this.toggle.bind(this);
      }
    
      componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
      }
    
      fetchNote = id => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
          .then(response => {
            this.setState(() => ({ note: response.data }))
            
          })
          .catch(error => console.log(error));
      };
    

      editNote = (id) => {
        axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.note)
        .then(response => {
          console.log('response', response)
          this.setState({ note: response.data })
        })
        .catch(error => console.log(error))
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
        this.setState({ editing: false, note: {
          title: this.state.editedTitle, 
          textBody: this.state.editedTextBody,
           _id: this.state.note._id, 
           tags: []} 
          })
        setTimeout(() => { this.editNote(this.state.note._id); }, 500);
    };
    


      toggle() {
        this.setState({
          modal: !this.state.modal
        });}

      deleteNoteButton = (id) => {
        
        axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(response => {
          console.log('response', response)
        })
       
        .catch (error => console.log('Error: ', error ))
      }


        deleteHandler = event => {
          // event.preventDefault();
          this.deleteNoteButton(this.state.note._id);
          this.props.history.push('/')
          window.location.reload();
          
      }



      render() {
        let viewStyle = {};
        let editStyle = {};
         if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        if (!this.state.note) {
            return <div> Loading Note...</div>
        }
        
        return (
          <div className="notes-container">
            <div className ='editDelete'>
                 {/* <button onClick= {this.deleteNoteButton} id={this.state.note._id}> Delete </button> */}

                <Button onClick={this.toggle}> Delete</Button>
                <Modal 
                  isOpen={this.state.modal}
                  toggle={this.toggle}>
                
                <ModalBody>
                    Are you sure you want to delete this note?
                </ModalBody>
                <ModalFooter>
                  <Button  onClick={this.deleteHandler}>Delete</Button>
                  <Button  onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
           
            
                <Button onClick={this.editHandler}>Edit</Button>
           </div>
            <h1>{this.state.note.title}</h1>
            <p>{this.state.note.textBody}</p>
            
                <form onSubmit={this.saveHandler}>
                  <input
                    name="editedTitle"
                    type= "text"
                    style={editStyle}
                    onKeyDown={this.submitHandler}
                    onChange={this.changeHandler}
                    value={this.state.editedTitle}/>
                  <input
                    name="editedTextBody"
                    type="textarea"
                    style={editStyle}
                    onKeyDown={this.submitHandler}
                    onChange={this.changeHandler}
                    value={this.state.editedTextBody}/>
                </form>
                 <Button onClick={this.saveHandler} style={editStyle} >Save</Button>
               
          </div>
        );
      }
    }


export default NoteView;