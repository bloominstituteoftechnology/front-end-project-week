import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editNote } from '../actions';

class EditNote extends Component {
    state = {
        title: ``,
        body: ``,
        id: this.props.match.params.id
    };

    handleEditNote = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    edit = (event) => {
        event.preventDefault();
        this.props.editNote(this.state);
        this.setState({ title: `${this.props.match.params.title}`,
                        body: `${this.props.match.params.body}` });
        this.props.history.push(`/notes/${this.state.id}`);
    };

    render() {
        return (
            <div>
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