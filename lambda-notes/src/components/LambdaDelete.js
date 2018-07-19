import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LambdaDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.handleSelectNote(id);
    }

    deleteNote = () => {
        this.props.handleDeleteNote(this.props.match.params.id)
    }


    render() {
        return (
            <div>
                Are you sure you want to delete this?
            <Link to="/">
            <h2 onClick={this.deleteNote}>
                Delete
        </h2>
        </Link>
        <Link to="/edit/:id">
            <h2 onClick={this.props.handleDelete}>
                No
        </h2>
        </Link>

                
        </div>
        )
    }
}

export default LambdaDelete;