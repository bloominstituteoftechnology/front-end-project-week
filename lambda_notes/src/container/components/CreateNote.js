import React, { Component } from 'react';
import Notes from '../func/Notes';
import './components.css';
 
class CreateNote extends Component{
    

    handleInputChange = (e) => {
        e.preventDefault();
        this.props.onTextChange(e.target.value);
    }

    // submitNote = (e) => {
    //     e.preventDefault();
    //     const newNote = this.state.notesList.slice();
    //     const item = {title: this.state.title, content: this.state.content, id: Date.now()};
    //     newNote.push(item);
    //     this.setState({ title: "", content: "", newNote })
    //     this.props.fetch(newNote);
    // }

    

    render() {
        return(
            <div>
                <form>
                    <div>
                        <label>
                            Title:
                            <input name="title" value={this.props.title} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="content">
                        <label>
                            Content:
                            <input name="content" value={this.props.content} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <button onClick={this.submitNote}>Submit Note</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;