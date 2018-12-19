import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: '',
            show: false
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

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return(
            <div className='note-view'>
                <div className='note-view-edits'>
                    <Link className='edit-link' to={`/edit/${this.state._id}`}>edit</Link>
                    <h4 className='delete' onClick={this.showModal}>delete</h4>
                </div>
                <h2 className='note-view-title' >{this.state.title}</h2>
                <p>{this.state.textBody}</p>
                {this.state.show ? (
                    <DeleteModal deleteNote={this.deleteNote} hideModal={this.hideModal} />                    
                ) : null }
            </div>
        );
    }
        


}

export default NoteView;