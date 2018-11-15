import React from 'react';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit = e => {
        e.preventDefault();

    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h2>Create New Note:</h2>
                </header>
                <form className="note-form" onSubmit={this.handleSubmit}>
                    <input />
                    <textarea />
                    <button>Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default NoteForm;