import React from 'react';
import axios from 'axios';


class EditNote extends React.Component{

    constructor(){
        super();
        this.state ={
            note : {
                title : '',
                textBody : '',
                id: ''
            }
        }
    }

    editNote = e => {
        e.preventDefault();
        const {id} = this.props.match.params;
        axios.put(`http://localhost:9000/api/notes/${id}`,this.state.note)
        .then(response => console.log(response))
        .catch(error => console.log("ERROR", error))

    }

    fetchNoteById = () => {
        const {id} = this.props.match.params;
        axios.get(`http://localhost:9000/api/notes/${id}`)
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

    render(){
        return(
            <div>
                <form onSubmit={this.editNote} className="edit-form">
				<h2>Edit Note:</h2>

                    <input className="form-title"
                    onChange={this.onChangeHandler}
                    name="title"
                    type="text" 
                    value={this.state.note.title} 
                    />

                    <input className="form-content"
                    onChange={this.onChangeHandler}
                    name="textBody"
                    type="text" 
                    value={this.state.note.textBody} 
                    />

                    <input className="form-save"
                        onClick={this.editNote}
                        type="submit" 
                        value="Save" 
                    />

                </form>
            </div>
        );
    }
}

export default EditNote;