import React, { Component } from 'react';
import './CreateNote.css'


class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const note = { title: this.state.title, content: this.state.content };
        this.props.createNote(note);
        this.setState({ title: '', content: '' })
    }

    handleChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className="create-ctn">
                <h2>Create Note:</h2>
                <form>
                    <input
                        className='title-bar'
                        type='text'
                        placeholder="Add a title..."
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title'
                    />
                    <div>
                        <textarea
                            className='content-bar'
                            type='text'
                            placeholder="Add a note..."
                            value={this.state.content}
                            onChange={this.handleChange}
                            name='content'
                        />
                    </div>
                    <div onClick={this.onSubmit} className='create-btn'>Save</div>
                </form>
            </div>)
    }
}

export default CreateNote;