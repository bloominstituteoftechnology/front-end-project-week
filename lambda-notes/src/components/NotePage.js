import React, {Component} from 'react';
import { Link } from "react-router-dom";
import DeleteModal from './DeleteModal';

class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        };
    }

    componentDidMount() {
        this.setState({ note: this.props.data.find(note => note.id === parseInt(this.props.match.params.id, 10))})
      }

    render () {
        return (
            <div className="note-page">
                <div className="note-options">
                <Link to={`/notes/${this.props.match.params.id}/edit-note`}>edit</Link>
                <DeleteModal id={this.state.note.id} deleteNote={this.props.deleteNote}/>
                </div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.content}</p>
            </div>
        )
    }
}

export default NotePage;