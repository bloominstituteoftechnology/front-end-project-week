import React, { Component } from 'react';

class CreateNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            tags: '',
            textBody: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="createNote">
                <h2 className="createNoteTitle">Create New Note:</h2>
                <form className="createForm" onSubmit={(ev) => {ev.preventDefault(); this.props.submit(this.state.tags, this.state.title, this.state.textBody); this.setState({title: '', tags: '', textBody: ''})}} >
                    <input type="text" name="title" className="createFormTitleInput" placeholder="Note Title" value={this.state.title} onChange={this.changeHandler} />
                    <input type="text" name="tags" className="createFormTitleInput" placeholder="Note Tags" value={this.state.tags} onChange={this.changeHandler} />
                    <textarea type="text" name="textBody" className="createFormTextInput" placeholder="Note Text" value={this.state.textBody} onChange={this.changeHandler} />
                    <button className="button saveButton" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;