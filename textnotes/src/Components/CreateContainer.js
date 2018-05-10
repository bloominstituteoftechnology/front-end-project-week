import React, { Component } from 'react';
import { connect } from 'react-redux';


import { postNote } from '../Action';
import '../App.css';

class CreateContainer extends Component {

    state = {
        id: '',
        title: '',
        content: '',
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        const { title, content } = this.state;

        e.preventDefault()
        this.props.postNote({ title, content });
        this.setState({ id: '', title: '', content: '' })
        this.props.history.push('/');
    }

    render() {
        return(
            
            <div className="createPage">
                <h3 className="create-logo"> Create New Note: </h3>
                <input className="title-text-box"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    placeholder="Note Title"
                    />
                    
                <textarea className="content-box"
                    onChange={this.handleInputChange}
                    value={this.state.content}
                    type="text"
                    name="content"
                    placeholder="Note Content"
                    />

                    <button onClick={this.handleSubmit} className="save-button">Save</button>
            </div>
        );
    }
}

export default connect(null, { postNote })(CreateContainer);