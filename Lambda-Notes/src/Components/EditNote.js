import React from 'react';
import axios from 'axios';


class EditNote extends React.Component{

    constructor(){
        super();
        this.state ={
            note : {
                title : '',
                textBody : '',
            }
        }
    }
//allows us to edit the note
    editNote = e => {
        e.preventDefault();
        const ID = this.props.match.params;
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${ID.id}`,this.state.note)
        .then(response => {
            this.setState({note : {title : '',textBody : ''}});
            this.props.history.push("/");
            this.props.refresh();
            
        })
        .catch(error => console.log("EDIT ERROR ::", error))
    }

    fetchNoteById = () => {
        const ID = this.props.match.params;
        axios.get(`https://fe-notes.herokuapp.com/note/get/${ID.id}`)
            .then(response => {
                this.setState({note : response.data})
            })
            .catch(error => alert(error))
    }

    componentDidMount(){
        const ID = this.props.match.params;
        
        this.fetchNoteById(ID.id);
    }
    onChangeHandler = e => {
        this.setState({note : {...this.state.newNote,[e.target.name] : e.target.value }})
    }
// renders everything for the edit note area 
    render(){
        return(
            <div>
                <form onSubmit={this.editNote}>

                    <input 
                    onChange={this.onChangeHandler}
                    name="title"
                    type="text" 
                    value={this.state.note.title} 
                    />

                    <input 
                    onChange={this.onChangeHandler}
                    name="textBody"
                    type="text" 
                    value={this.state.note.textBody} 
                    />

                    <input 
                        onClick={this.editNote}
                        className="form-save"
                        type="submit" 
                        value="Save" 
                    />

                </form>
            </div>
        );
    }
}

export default EditNote;