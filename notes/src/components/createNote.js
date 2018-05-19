import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateNote extends Component {
    state = {
        title: '',
        text: ''
    };

    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = () => {
        const { title, text } = this.state;
        this.props.noteCreate({ title, text});
        this.setState({ title: '', text: '' });
    }


    render() {
        const { title, text } = this.state;
        return (
            <div>
                <input 

                type='text'
                value={title}
                name="title"
                placeholder="Note Title Here"
                onChange={this.handleTextInput}
                
                />

                 <input 
                
                type='text'
                value={text}
                name="text"
                placeholder="Note Text Here"
                onChange={this.handleTextInput}
                
                />
                <br />
                <Link to={"/"}><button onClick={() => this.handleSubmit()} type="submit">Save Note</button></Link>
                
                
            </div>

        );
    }
}