import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
          modal: false,
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
    
      // componentWillReceiveProps(newProps){
      //   if(this.props.match.params.id !== newProps.match.params.id){
      //     this.fetchNote(newProps.match.params.id);
      //   }
      // }

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
        // .then(response => {
        //   this.setState({
        //     note: response.data
        //   });
        // })
        .catch (error => console.log('Error: ', error ))
      }


        deleteHandler = event => {
          // event.preventDefault();
          this.deleteNoteButton(this.state.note._id);
          this.props.history.push('/')
      }

      render() {

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
           
            
                 <Link to={`/note/edit/${this.state.note._id}`}>edit</Link>
                 
                  
               
            </div>
            <h1>{this.state.note.title}</h1>
            <p>{this.state.note.textBody}</p>
          </div>
        );
      }
    }


export default NoteView;