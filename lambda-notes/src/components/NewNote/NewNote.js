import React from 'react';

class NewNote extends React.Component {
    constructor() {
        super();
        this.state = {
            noteName: '',
            noteBody: ''
        };
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
                    <form className="mainContent__Form" onSubmit={this.createSmurf} >
                        <input
                            className="form__input form__input--title"
                            onChange={this.handleInputChange}
                            placeholder="Note Title"
                            value={this.state.noteName}
                            name="noteName"
                        />
                        <input
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

export default NewNote;