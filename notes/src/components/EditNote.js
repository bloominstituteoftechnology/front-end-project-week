import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            textBody: '',
            foundNote: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    componentDidMount() {
        if(this.props.notes.length > 0) {
        this.setState(function (prevState, props) {
        return {
            foundNote: this.props.notes.find(note => note.id === parseInt(this.props.match.params.id, 10))
        }}, () => {
            this.afterCDM();
        })
    }
    }

    afterCDM = () => {
        this.setState(function (prevState, props) {
            return {
                title: this.state.foundNote.title,
                textBody: this.state.foundNote.textBody
            }})
    }

    render() {
        
        if(this.props.notes.length > 0) {
            console.log('realIndex on Edit', this.state.realIndex)
        return (
            <div className="editNote">
                <h2 className="editNoteTitle">Edit Note:</h2>
                <form className="editForm" onSubmit={(event) => {event.preventDefault(); this.props.submitEdit(this.state.foundNote.id, this.state.title, this.state.textBody)}} >
                    <input type="text" name="title" className="createFormTitleInput" placeholder={this.state.foundNote.title} value={this.state.title} onChange={this.changeHandler} />
                    <textarea type="text" name="textBody" className="createFormTextInput" placeholder={this.state.foundNote.textBody} value={this.state.textBody} onChange={this.changeHandler} />
                    <button className="button saveButton" type="submit">Save</button>
                </form>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default EditNote;