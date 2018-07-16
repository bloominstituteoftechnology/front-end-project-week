import React from 'react';

class NewNote extends React.Component {
    constructor() {
        super();
        this.state = {
            noteName: '',
            noteBody: '',
        };
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
                        <input
                            className="form_input form_input_body"
                            onChange={this.handleInputChange}
                            placeholder="Note Content"
                            value={this.state.noteName}
                            name="noteBody"
                        />
                        <button className="link_button" type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewNote;