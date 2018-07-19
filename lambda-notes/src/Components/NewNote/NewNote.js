import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';


class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteName: '',
            noteBody: ''
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
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Create New Note:
                </div>
                <div className="mainContent__content">
                    <form className="mainContent__Form" onSubmit={this.createNote} >
                        <input
                            className="form__input form__input--title"
                            onChange={this.handleInputChange}
                            placeholder="Note Title"
                            value={this.state.noteName}
                            name="noteName"
                        />
                        <textarea
                            className="form__input form__input--body"
                            type="textarea"
                            onChange={this.handleInputChange}
                            placeholder="Note Content"
                            value={this.state.noteBody}
                            name="noteBody"
                        />
                            <button className="link__button" type="submit">Save</button>
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