import React, { Component } from 'react';
import { Route } from "react-router-dom";

class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content:''
        };
    }

    render() {
        return (
            <div className='NoteForm'>
                <form>
                    <input 
                        onChange={this.handleChange}
                        placeholder='title'
                        value={this.state.title}
                        name='title'
                    />
                    <textarea name='content'>Content</textarea>
                </form>
            </div>
        )
    }
}