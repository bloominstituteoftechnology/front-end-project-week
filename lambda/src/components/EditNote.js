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
        // console.log(ID)
        this.fetchNoteById(ID.id);//why? how lol?
    }
    onChangeHandler = e => {
        this.setState({note : {...this.state.newNote,[e.target.name] : e.target.value }})
    }

    render(){
        return(
            <div className="edit-note">
                <form onSubmit={this.editNote}>

                    <input
                    className="title-input" 
                    onChange={this.onChangeHandler}
                    name="title"
                    type="text" 
                    value={this.state.note.title} 
                    />

                    <input 
                    className="text-body-input"
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