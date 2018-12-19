import React from "react";
import { Link } from "react-router-dom";

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: '',
        };
    }

    componentDidMount() {
        const note = this.props.notes.find(
            note => `${note._id}` === this.props.match.params.id
        );
        this.setState(note);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.title === '' || this.props.match.params.id !== prevProps.match.params.id)
        {
            const note = this.props.notes.find(
                note => `${note._id}` === this.props.match.params.id
            );
            this.setState(note);
        }
    }

    deleteNote = () => {
        this.props.deleteNote(this.state._id);
        this.props.history.push('/');
    };

    render() {
        return(
            <div className='note-view'>
                <div className='note-view-edits'>
                    <Link className='edit-link' to={`/edit/${this.state._id}`}>edit</Link>
                    <h4 className='delete' onClick={this.deleteNote}>delete</h4>
                </div>
                <h2 className='note-view-title' >{this.state.title}</h2>
                <p>{this.state.textBody}</p>
            </div>
        );
    }
        


}

export default NoteView;