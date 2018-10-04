import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


export default class EditNote extends React.Component {
    state = {
        note: ''
    }

    handleChange = e => {
        this.setState({note: e.target.value})
    }


    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const editNote = {
            note: this.state.note
        };
        axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {editNote})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Edit Title:
                    <input type='text' name='note' value={this.props.title} onChange={this.handleChange} />
                </label>
                <label>
                    Edit Text:
                    <input type='text' name='note'
                    value={this.props.title} onChange={this.handleChange} />
                </label>
                <button type='submit'><NavLink exact to='/edit/:id'>Save</NavLink></button>
            </form>
        );
    }
}
