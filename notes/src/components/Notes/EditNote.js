import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './EditNote.css'
class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: 0
        }
    }
    componentDidMount() {
        const { note } = this.props.location.state;
        this.setState({id: note.id, title: note.title, content: note.content })
    }

    handleChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        const note = {id: this.state.id, title: this.state.title, content: this.state.content }
        this.props.editNote(note);
    }

    render() {
        return (
            <div className='edit-ctn'>
                <h2>Edit Note:</h2>
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
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <div onClick={this.onSubmit} className='create-btn'>Update</div>
                    </Link>
                </form>
            </div>
        )
    }
}
export default EditNote;