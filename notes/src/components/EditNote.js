import React from 'react';
import { connect } from 'react-redux';

import { editNote } from '../actions';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        };
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = event => {
        event.preventDefault();
        const id = this.props.match.params.noteId;
        this.props.editNote(id, this.state.title, this.state.textBody);
        this.props.history.push("/");
      }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
            <input
                onChange={this.handleInputChange}
                placeholder="Change the title..."
                value={this.state.title}
                name="title"
            />
            <input
                onChange={this.handleInputChange}
                placeholder="Change the note's text"
                value={this.state.textBody}
                name="textBody"
            />
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, { editNote })(EditNote);