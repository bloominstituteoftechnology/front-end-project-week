import React,{Fragment} from 'react';
import axios from 'axios';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
                title:'',
                textBody:''
            }
        }

    componentDidMount(){
        if(this.props.Editing){
            this.setState({
                title: this.props.note.title,
                textBody: this.props.note.textBody
            })
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.props.Editing){
        const updatedNote = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.editNote(updatedNote)
    }else{
        this.addNote(e)
    }
}

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addNote = (e) => {
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
        this.props.history.push('/')
      }
      

    render(){
        return(
            <div>
                <h1>{this.props.Editing ? "Edit Note" : "Add Note"}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange} name="title" value={this.state.title} placeholder="Title" />
                    <input type="text" onChange={this.handleInputChange} name="textBody" value={this.state.textBody} placeholder="Notes" />
                    <button>{this.props.Editing ? "Update" : "Add Note"}</button>
                </form>
            </div>
         
        );
    }
}

export default NoteForm;