import React from 'react';

import './noteForm.css';

class Form extends React.Component {
    state = {
            title: "",
            textBody: ""
        }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createNote = e => {
        this.props.addNote(e, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="container-form">
                <div className="notes-header">
                    <h3 className='home-title' >Create New Note:</h3>
                </div>
                <div className='home-body'>
                <form onSubmit={this.createNote} >
                    <textarea
                        className="edit-title"
                        name="title"
                        size='80'
                        value={this.state.title}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <textarea
                        className="edit-content"
                        name="textBody"
                        cols='80'
                        rows='30'
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        type="text"
                        placeholder='Note Content'
                    />
                        <br/>
                    <button className="update-button">Save</button>
                </form>
                </div>
            </div>
        );
    }
}

export default Form;