import React, { Component } from 'react';
import { AssembleNote, ReviseNote } from '../Presentational';
import { Route } from 'react-router-dom';

export class Forms extends Component {
    state = {};

    componentDidMount() {

    }

    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>FORMS
                <Route path="/forms/assemble" render={props => (
                    <AssembleNote 
                    {...props}
                    note={this.state} 
                    handleInput={this.handleInput} 
                    assembleNote={this.props.assembleNote} 
                    formName="assemble"/>
                )}/>

                <Route path="/forms/revise" render={props => (
                <ReviseNote />
                )}/>


            </div>
        )
    }
}