import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Notes.css';
import axios from 'axios';

// const URL = 'https://fe-notes.herokuapp.com/note';
const URL = 'https://morning-tundra-78343.herokuapp.com/note';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: {},
            title: '',
            textBody: '',
        };
    }

    componentDidMount() {
        axios
            // .get(`${URL}/get/all`)
            .get(`${URL}/get/all`)
            .then(response => {
                this.setState(() => ({ notes: response.data }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            textBody: this.state.textBody,
        };
        console.log(note);
        axios
            // .post(`${URL}/create`, note)
            .post(`${URL}/create`, note)
            .then(response => {
                this.props.history.push('/');  
                this.setState({ title: '', textBody: '', });
                this.setState({ notes: response.data });
            })
            .catch(error => {
                console.log(error);
            })         
    };

    render() {
        return (
            <div className="notes-list">
                <h2 className="your-notes">Create New Note:</h2>
                    <form className="input-form" onSubmit={this.submitHandler} >
                        <input type="text" placeholder="Note Title" name="title" defaultValue={this.state.title} onChange={this.handleChange} />
                        <textarea placeholder="Note Content" name="textBody" value={this.state.textBody} onChange={this.handleChange} />
                        <button type="submit" className="submit-button">Save</button>
                    </form>
            </div>
        )
    }
};

export default withRouter(AddNote);