import React, { Component } from 'react';

class NoteUpdate extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            _id: props.note._id,
            title: props.note.title,
            textBody: props.note.textBody
        }
        console.log(this.state);
    }

    handleInput = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
      }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Edit Note</h1>
                <form>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleInput}
                        value={this.state.title}
                    />

                    <label>Content</label>
                    <input
                        type="text"
                        name="textBody"
                        placeholder="Content"
                        onChange={this.handleInput}
                        value={this.state.textBody}
                    />
                    <button onClick={this.props.updateNote(this.state)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NoteUpdate;