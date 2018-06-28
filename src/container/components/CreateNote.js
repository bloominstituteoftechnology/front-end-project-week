import React, { Component } from 'react';
import axios from 'axios';

import '../component.css';
 
class CreateNote extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            content: "",
            notesList: [],
           
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]:e.target.value});
    }

    submitNote = (e) => {
        e.preventDefault();
        console.log("Does it match", this.props.match.path === `/Create/edit/:title` ? "Yes" : "No")
        if(this.props.match.path === `/Create/edit/:title`){

            const newNote = this.state.notesList;
            const item = { title: this.state.title, content: this.state.content, id: Date.now() };
            newNote.push(item);

            //const title = this.props.match.params.title;
            console.log(this.props.NoteData._id)
            axios.put(`http://localhost:5000/api/edit/${this.props.NoteData._id}`, this.state)
                .then(response => {
                    console.log('response', response.data);
                    this.props.history.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
            this.setState({ title: "", content: "", newNote})
        }else{
            const newNote = this.state.notesList;
            const item = { title: this.state.title, content: this.state.content, id: Date.now() };
            newNote.push(item);
            console.log("CreateNote line 65", newNote);
            axios.post('http://localhost:5000/api/create/note', this.state)
                .then(response => {
                    console.log('response',response.data)
                    this.props.history.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
            this.setState({ title: "", content: "", newNote })
        }
        
    }

    render() {
        return(
            <div>
                <form>
                    <div>
                        <label>
                            Title:
                            <input name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="content">
                        <label>
                            Content:
                            <input name="content" value={this.state.content} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <button onClick={this.submitNote}>Submit Note</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;