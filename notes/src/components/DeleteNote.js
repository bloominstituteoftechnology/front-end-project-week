import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DeleteNote extends Component {
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
                    <h3> Are you sure you want to delete this?
                    </h3>
                    <Link to = "/">
                    <h3 onClick = {this.deleteNote}>
                        Delete 
                    </h3>   
                    </Link>
                    <Link to ="/edit/:id">
                    <h3 onClick = {this.props.handleDelete}>
                        No
                    </h3> 
                    </Link>
                </div>
        )
    }
}

export default DeleteNote;