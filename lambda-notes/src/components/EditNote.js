import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote } from '../actions';

class EditNote extends Component {
    state = {
        title: ``,
        body: ``,
        id: parseInt(this.props.match.params.id)
    };

    matchedNote = this.props.notes.filter(note => {
        return note.id == this.props.match.params.id
    })[0];

    componentDidMount() {
        this.setState({title: this.matchedNote.title, body: this.matchedNote.body})
    };

    handleEditNote = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    edit = (event) => {
        event.preventDefault();
        this.props.editNote(this.state);
        this.setState({ title: `${this.props.match.params.title}`,
                        body: `${this.props.match.params.body}` });
        window.location.href = "/";
    };

    render() {
        return (
            <div className="edit-view">
                <form>
                    <input 
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleEditNote}
                    />
                    <textarea 
                        placeholder="Write note here"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleEditNote}
                    />
                    <button onClick={this.edit}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { editNote })(EditNote);