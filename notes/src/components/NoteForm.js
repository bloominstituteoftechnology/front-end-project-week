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
            <form onSubmit={this.handleSubmit}>
                <input />
                <textarea />
                <button>Save</button>
            </form>
        )
    }
}

export default NoteForm;