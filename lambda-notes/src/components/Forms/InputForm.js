// Dependencies
import React, { Component } from 'react';

class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            text: "",
        }
    }

    handleTextChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div style={{background: "var(--color-bg--main)"}} className="pr-3">
            </div>
        );
    }
}