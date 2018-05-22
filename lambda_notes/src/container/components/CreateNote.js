import React, { Component } from 'react';
import Notes from '../func/Notes';
import './components.css';
 
class CreateNote extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            content: "",
            notesList: []
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.setState({ [e.target.name]:e.target.value});
    }

    submitNote = (e) => {
        const newNote = this.state.notesList.slice();
        const item = {title: this.state.title, content: this.state.content, id: Date.now()};
        newNote.push(item);
        this.setState({ title: "", content: "", newNote })
        console.log(newNote)
        e.preventDefault();
    }

    render() {
        console.log(this.state.title)
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
                <Notes NoteData={this.state} />
            </div>
        )
    }
}

export default CreateNote;