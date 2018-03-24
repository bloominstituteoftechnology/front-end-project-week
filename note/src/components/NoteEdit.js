import React, {Component} from 'react';

class NoteEdit extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            title: event.target.value,
            content: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Edit Note:</h1>
                <input type="text" value={this.state.title} onChange={this.handleChange} />
                <input type="text" value={this.state.content} onChange={this.handleChange} />
            </div>
        );
    }
}

export default NoteEdit;