import React, { Component } from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 




class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.createNote(this.state);
        this.setState({
            title: '',
            content: ''        
        });
    }

    render() {
        return (
            <div>

                <input
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    name="title"
                />
                <input
                    placeholder="Your Dreams Begin Here"
                    onChange={this.handleChange}
                    value={this.state.content}
                    name="content"
                />

                <button onClick={this.handleSubmit}>Submit</button>
            </div>

        )
    }
}



export default connect(null, { createNote })(NewNote);