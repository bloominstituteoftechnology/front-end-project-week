import React, { Component } from 'react';
import { AssembleNote, ReviseNote } from '../Presentational';
import { Route } from 'react-router-dom';

export class Forms extends Component {
    state = {};

    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>FORMS
                <Route exact path="/forms/assemble" render={props => (
                    <AssembleNote 
                    {...props}
                    note={this.state} 
                    handleInput={this.handleInput} 
                    assembleNote={this.props.assembleNote} 
                    formName="assemble"/>
                )}/>

                <Route exact path="/forms/revise/:id" render={props => (
                <ReviseNote 
                {...props} 
                note={this.state} 
                handleInput={this.handleInput} 
                reviseNote={this.props.reviseNote} 
                />
                )}/>


            </div>
        )
    }
}