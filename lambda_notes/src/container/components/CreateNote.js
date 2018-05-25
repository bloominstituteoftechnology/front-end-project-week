import React, { Component } from 'react';
import Notes from '../func/Notes';

import '../component.css';
 
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
                },
                {
                    "title": "Card_4",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950224
                },
                {
                    "title": "Card_5",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950749
                },
                {
                    "title": "Card_6",
                    "content": "fvgbhnjnhbgvfcd",
                    id: 1527057950194
                },
                
            ],
           
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
            const title = this.props.match.params.title;
            console.log("title", title)
            const updNote = {title: this.state.title, content: this.state.content};
            this.props.EditData(title, updNote);
        }else{
            const newNote = this.state.notesList;
            const item = { title: this.state.title, content: this.state.content, id: Date.now() };
            newNote.push(item);
            console.log("CreateNote line 65", newNote);
            this.props.fetch(this.state.notesList);
            this.setState({ title: "", content: "", newNote })
        }
        
    }

    // editNote = (e) => {
    //     const updNote = { title, content } 
    //     this.setState({ title: this.state.title, content: this.state.content })
    //     this.props.EditData(title, updNote)
    // }

    render() {
        console.log(this.props)
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