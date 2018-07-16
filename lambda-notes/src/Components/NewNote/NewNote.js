import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: '',
            noteBody: '',
        };
    }

    createNote = event => {
        event.preventDefault();
        const { noteName, noteBody } = this.state;
        const newNote = {
            name: noteName,
            body: noteBody
        }
        this.props.addNote(newNote);
        this.setState({ noteName: '', noteBody: '' });
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="mainContent">
                <div className="directory_title mainContent_title">
                    Create New Note:
                </div>
                <div className="mainContent_content">
                    <form className="mainContent_Form" onSubmit={this.createNote} >
                        <input
                            className="form_input form_input_title"
                            onChange={this.handleInputChange}
                            placeholder="Note Title"
                            value={this.state.noteName}
                            name="noteName"
                        />
                        <textarea
                            className="form_input form_input_body"
                            type="textarea"
                            onChange={this.handleInputChange}
                            placeholder="Note Content"
                            value={this.state.noteBody}
                            name="noteBody"
                        />
                        <Link to="/" >
+                            <button className="link__button" type="submit">Save</button>
+                       </Link>
                    </form>
                </div>
            </div>
        )
    }
}

const stateProps = state => {
    return {
        addingNote: state.addingNote,
        error: state.error
    }
}

export default connect(stateProps, { addNote })(NewNote);