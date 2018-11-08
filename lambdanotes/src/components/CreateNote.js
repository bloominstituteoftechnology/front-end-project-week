import React, { Component } from 'react';
import axios from "axios"; 
import './CreateNote.css';


class CreateNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
          notes: [],
          newNote:'',
          newTitle:'',
          note:null,
          editedNote:'',
          editedTitle:'',
          noteId:null,
       
           };
        };
      
      componentDidMount() {
        axios
          .get('https://fe-notes.herokuapp.com/note/get/all')
          .then(response => {
            this.setState(() => ({ notes: response.data }));
          })
          .catch(error => {
            console.error('Server Error', error);
          });
         
      }
      //SAVE NEW NOTE-----------------------------------
      addNewNote = event => {
        event.preventDefault();
        axios     
        .post('https://fe-notes.herokuapp.com/note/create',  
        {
          title: this.state.newNote,
          textBody: this.state.newTitle,
        })
    
        .then(response => {
          console.log(response);
          console.log(response.data);
          this.setState((prevState) => ({ 
            notes:[...prevState.notes, {_id:response.data.success,  title: prevState.newNote,
              textBody: prevState.newTitle,}],
            newNote:'',
            newTitle:'',
          }));
          })
    
        .catch(error => {
          console.error('Server Error', error);
        });
        }
    
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };


    render() {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        Create New Note:
                    </h3>
                </div>
                <div className='createNote_form'>
                    <input
                        type='text'
                        className='createNote_title'
                        placeholder='Note Title'
                        name='title'
                        value={this.state.notes.title}
                        onChange={this.handleInputChange}
                    />
                    <textarea
                        className='createNote_body'
                        placeholder='Note Content'
                        name='body'
                        value={this.state.notes.body}
                        onChange={this.handleInputChange}
                        rows="20"
                    />
                    <div
                        className='nav_button createNote_button'
                        onClick={this.addNewNote}
                    >
                        Save
                        </div>   
                </div>
            </div>
        );
    }
}

export default CreateNote;
