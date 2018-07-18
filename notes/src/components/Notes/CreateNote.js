import React, { Component } from 'react';
import './CreateNote.css'


let id = 0;
class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: id
        }
    }

    componentWillUnmount() {
        id = this.state.id;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const note = { id: this.state.id, title: this.state.title, description: this.state.content };
        let id = this.state.id + 1;
        this.props.createNote(note);
        this.setState({ title: '', content: '', id: id })
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