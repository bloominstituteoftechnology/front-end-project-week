import React, { Component } from 'react';
import { AssembleNote, ExpungeNote } from '../Presentational';

export class Forms extends Component {
    state = {};

    handleInput = (e, formName) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>FORMS
                <AssembleNote note={this.state} handleInput={this.handleInput} assembleNote={this.props.assembleNote} formName="assemble"/>
                <ExpungeNote />
            </div>
        )
    }
}