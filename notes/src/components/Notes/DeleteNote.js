import React, { Component } from 'react';


class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        }
    }
    componentDidMount() {
        const { note } = this.props.location.state;
        this.setState({ note })
    }
    render() {
        return (
         <div>{this.state.note.title}</div>
        )
    }
}

export default DeleteNote;