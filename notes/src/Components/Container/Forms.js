import React, { Component } from 'react';

class Forms extends Component {
    state = {};

    handleInput = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>FORMS</div>
        )
    }
}

export default Forms;