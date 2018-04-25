import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';
// import { Link } from 'react-router-dom';

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
            name: this.capTitle(noteName),
            body: this.capSentences(noteBody)
        }
        this.props.addNote(newNote);
        this.setState({ noteName: '', noteBody: '' });
        let route = window.location.pathname.split('/')
        let newRoute = route.splice(0, route.length -1).join('/')
        window.location.pathname = newRoute;
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    capTitle = str => {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }

    capSentences = str => {
        return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
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
                        {/* <Link to="/" > */}
                        <button className="link__button" type="submit">Save</button>
                        {/* </Link> */}

                    </form>
                </div>
            </div>
        )
    }
}

const stateProps = state => {
    return {
        addingNote: state.rootReducer.noteReducer.addingNote,
        error: state.rootReducer.noteReducer.error
    }
}

export default connect(stateProps, { addNote })(NewNote);