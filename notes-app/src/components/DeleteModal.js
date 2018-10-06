import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteModal extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('component mounting')
    }
    deleteHandler = () => {
        this.props.deleteRequest(this.props.match.params.id);
        this.props.history.push('/notes');
    }
    backToNote = () => {
        this.props.history.push(`/notes/${this.props.match.params.id}`)
    }
    
    render() {
        return (
            <div>
                <h1 className="delete-header">Are you sure you want to delete?</h1>
                <div className="button-form">
                    <div className="delete-button" onClick={() => this.deleteHandler()}>
                        delete
                    </div>
                    <div className="cancel-button" onClick={() => this.backToNote()}>
                        cancel
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;