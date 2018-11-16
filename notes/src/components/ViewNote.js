import React, { Component } from 'react';

class ViewNote extends Component {
    constructor() {
        super();
        this.state = {
            title: this.props.viewNote.title,
            body: this.props.viewNote.body
        }
    }

    componentWillMount() {
        this.setState({
            title: this.props.viewNote.title,
            body: this.props.viewNote.body
        });
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h2>{this.state.title}</h2>
                <p>{this.state.body}</p>
            </>
        )
    }
}

export default ViewNote;