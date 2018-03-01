import React, {Component} from 'react';

class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange() {

    }

    render() {
        return (
            <div>
                <h1>Create New Note:</h1>
                <input type="text" value={this.state.title} onChange={this.handleChange} />
                <input type="text" value={this.state.content} onChange={this.handleChange} />
            </div>
        );
    }
}

export default NoteEdit;