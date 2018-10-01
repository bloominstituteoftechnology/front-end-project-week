import React,{Fragment} from 'react';
import axios from 'axios';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
            note:{
                title:'',
                textBody:''
            },
            Editing:false
        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addNote = e => {
        e.preventDefault();
        const newNote = {
          title: this.state.title,
          textBody: this.state.textBody
        }
    
        this.props.postNote(newNote);
        
        this.setState({
          title: '',
          textBody: ''
        });
      }
      
       updateNote = e => {
        e.preventDefault();
         const editedNote = {
          title: this.state.title,
          textBody: this.state.textBody
        }
         this.props.editNote(editedNote);

         this.setState({
            title: '',
            textBody: ''
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        if(this.state.Editing){
        this.updateNote();
        }else{
        this.addNote();
        }
    }
      

    render(){
        return(
            <div>
                <h1>My Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} name="title" value={this.state.title} placeholder="Title" />
                    <input type="textbox" onChange={this.handleInputChange} name="textBody" value={this.state.textBody} placeholder="Notes" />
                    <button type="submit">Add Note</button>
                </form>
            </div>
         
        );
    }
}

export default NoteForm;