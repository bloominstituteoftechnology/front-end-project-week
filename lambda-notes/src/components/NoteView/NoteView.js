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
          editedcontent: ''
        };
        this.toggle = this.toggle.bind(this);
      }
    //matched id
      componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
      }
    //gets api based off of matching id's
      fetchNote = id => {
        axios
          .get(`http://localhost:9000/api/notes/${id}`)
          .then(response => {
            
            this.setState(() => ({ note: response.data }))
            
          })
          .catch(error => console.log(error));
      };
    
//puts new note to the api
      editNote = (id) => {
        axios
        .put(`http://localhost:9000/api/notes/edit/${id}`, this.state.note)
        .then(response => {
          console.log('response', response)
          this.setState({ note: response.data })
        })
        .catch(error => console.log(error))
      }

      //sets state to new input value

      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
      
      editHandler = event => {
          event.preventDefault();
          this.setState({ editing: true, editedTitle: this.state.note.title, editedcontent: this.state.note.content })

      }

      saveHandler = event => {
        event.preventDefault();
        this.setState({ editing: false, note: {
          title: this.state.editedTitle, 
          content: this.state.editedcontent,
           id: this.state.note.id, 
           tags: []} 
          })
        setTimeout(() => { this.editNote(this.state.note.id); }, 500);
    };
    

//toggles modal from true or false (see modal delete in return)
      toggle() {
        this.setState({
          modal: !this.state.modal
        });}

//deletes note based off of id
      deleteNoteButton = (id) => {
        
        axios
        .delete(`http://localhost:9000/api/notes/delete/${id}`)
        .then(response => {
          console.log('response', response)
        })
       
        .catch (error => console.log('Error: ', error ))
      }

//runs function ^^^^ and then pushed back to home page and forces reload
        deleteHandler = event => {
          event.preventDefault();
          this.deleteNoteButton(this.state.note.id);
          this.props.history.push('/')
          window.location.reload();
          
      }



      render() {
        //controls when the "do you want to delete this note?" box is shown
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
          <div className = 'singleNoteViewContainer'>
          
            <div className ='editDelete'>
                 

                <Button className = 'editDeleteButton' onClick={this.toggle}> Delete</Button>
                <Modal className = 'modal'
                  isOpen={this.state.modal}
                  toggle={this.toggle}>
                
                <ModalBody className ='popout'>
                    Are you sure you want to delete this note?
                </ModalBody>
                <ModalFooter className = 'modalFooter'>
                  <Button className= 'delete' onClick={this.deleteHandler}>Delete</Button>
                  <Button className = 'cancel' onClick={this.toggle}>No</Button>
                </ModalFooter>
                </Modal>
           
            
                <Button className = 'editDeleteButton' onClick={this.editHandler}>Edit</Button>
           </div>
           <div className="notes-container">
            <h1 className = 'noteTitle'>{this.state.note.title}</h1>
            <p>{this.state.note.content}</p>
            </div>
            
                <form className = 'editform' onSubmit={this.saveHandler}>
                <h1  className = 'editHeader' style={editStyle} >Edit Form: </h1>
                  <input
                    className = 'input1'
                    name="editedTitle"
                    type= "text"
                    style={editStyle}
                    onKeyDown={this.submitHandler}
                    onChange={this.changeHandler}
                    value={this.state.editedTitle}/>
                  <input
                    className = 'input2'
                    name="editedcontent"
                    type="textarea"
                    style={editStyle}
                    onKeyDown={this.submitHandler}
                    onChange={this.changeHandler}
                    value={this.state.editedcontent}/>

                    <Button className = 'links' onClick={this.saveHandler} style={editStyle} >Save</Button>
                </form>
                 
               
          </div>
        );
      }
    }


export default NoteView;