import React, { Component } from 'react';
import { addNote } from '../Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateNote extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        this.props.addNote(this.state);
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Title' value={this.state.title} onChange={this.handleChange} name='title' />
                <input placeholder='Content' value={this.state.content} onChange={this.handleChange} name='content' />
                <button onClick={this.handleAdd}>
                    <Link to="/">
                        Add Note
                    </Link>
                </button>
            </div>
        )
    }
}

export default connect(null, { addNote })(CreateNote);