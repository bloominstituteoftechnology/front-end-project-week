import React, { Component } from 'react';
import Notes from '../func/Notes';
import './components.css';
 
class CreateNote extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            content: "",
            notesList: [
                {
                    "title": "Card_1",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950536
                },
                {
                    "title": "Card_2",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950457
                },
                {
                    "title": "Card_3",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950123
                }
            ]
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]:e.target.value});
    }

    submitNote = (e) => {
        e.preventDefault();
        const newNote = this.state.notesList;
        const item = {title: this.state.title, content: this.state.content, id: Date.now()};
        newNote.push(item);
        console.log(newNote);
        this.props.fetch(this.state.notesList);
        this.setState({ title: "", content: "", newNote })
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