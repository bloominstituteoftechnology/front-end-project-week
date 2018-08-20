import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            textBody: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {
        if(this.props.notes.length > 0) {
        this.setState({
            title: this.props.notes[this.props.match.params.id].title,
            textBody: this.props.notes[this.props.match.params.id].textBody
        })
    }
    }

    render() {
        if(this.props.notes.length > 0) {
        return (
            <div className="editNote">
                <h2 className="editNoteTitle">Edit Note:</h2>
                <form className="editForm" onSubmit={(event) => {event.preventDefault(); this.props.submitEdit(this.props.match.params.id, this.state.title, this.state.textBody)}} >
                    <input type="text" name="title" className="createFormTitleInput" placeholder={this.props.notes[this.props.match.params.id].title} value={this.state.title} onChange={this.changeHandler} />
                    <textarea type="text" name="textBody" className="createFormTextInput" placeholder={this.props.notes[this.props.match.params.id].textBody} value={this.state.textBody} onChange={this.changeHandler} />
                    <button className="button saveButton" type="submit">Save</button>
                </form>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default EditNote;