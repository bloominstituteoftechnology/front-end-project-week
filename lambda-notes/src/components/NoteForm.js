import React,{Fragment} from 'react';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
            note:{
                title:'',
                textBody:''
            }
        }
    }

    addNote = event => {
        event.preventDefault();
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
    
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render(){
        return(
            <div>
                <h1>My Form</h1>
                <form onSubmit={this.addNote}>
                    <input type="text" onChange={this.handleInputChange} name="title" value={this.state.title} placeholder="Title" />
                    <input type="textbox" onChange={this.handleInputChange} name="textBody" value={this.state.textBody} placeholder="Notes" />
                    <button type="submit">Add Note</button>
                </form>
            </div>
         
        );
    }
}

export default NoteForm;