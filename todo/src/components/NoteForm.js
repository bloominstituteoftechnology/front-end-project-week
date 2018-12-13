import React, {Component} from 'react';

class NoteForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            tags: '',
            title: '',
            textBody: ''
            };
        }

    newNote = event => {
        const newNote = {tags: this.state.tags, title: this.state.title, textBody: this.state.textBody}

        }

    render() {
        return (
            <div>
                <form onSubmit={this.addNote}>
                    <input
                onChange={this.handleInputChange}
                placeholder="tags"
                value={this.state.name}
                name="tags"
                />
                <input
                onChange={this.handleInputChange}
                placeholder="title"
                value={this.state.age}
                name="title"
                />
                <input
                onChange={this.handleInputChange}
                placeholder="note text"
                value={this.state.height}
                name="text"
                />
                <button type="submit" onClick={this.addNote}>Add note</button>
            </form>
            </div>
            

        )
        
    }
}

export default NoteForm