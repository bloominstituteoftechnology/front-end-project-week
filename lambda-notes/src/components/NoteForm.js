import React,{Fragment} from 'react';
import './NoteForm.css';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
                title:'',
                body:''
            }
        }

    componentDidMount(){
        if(this.props.Editing){
            this.setState({
                title: this.props.note.title,
                body: this.props.note.body
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.Editing){
        const updatedNote = {
            title: this.state.title,
            body: this.state.body
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
          body: this.state.body
        }
    
        this.props.postNote(newNote);
        
        this.setState({
          title: '',
          body: ''
        });
        this.props.history.push('/')
      }
      

    render(){
        return(
            <div className="nf-wrapper">
                <h1>{this.props.Editing ? "Edit Note" : "Add Note"}</h1>
                <form className="nf" onSubmit={this.handleSubmit}>
                    <div className="nf-inputs">
                    <input type="text" onChange={this.handleInputChange} name="title" value={this.state.title} placeholder="Title" />
                    <input type="text" onChange={this.handleInputChange} name="body" value={this.state.body} placeholder="Notes" />
                    </div>
                    <button className="nf-button">{this.props.Editing ? "Update" : "Add Note"}</button>
                </form>
            </div>
         
        );
    }
}

export default NoteForm;