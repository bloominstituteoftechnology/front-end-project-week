import React, { Component } from 'react';
import { CreateNote, DeleteNote } from '../Presentational';

export class Forms extends Component {
    state = {};

    handleInput = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>FORMS
                <CreateNote />
                <DeleteNote />
            </div>
        )
    }
}