import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            tags: '',
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
            foundNote: this.props.notes.find(note => note._id === this.props.match.params.id)
        }}, () => {
            this.afterCDM();
        })
    }
    }

    afterCDM = () => {
        this.setState(function (prevState, props) {
            return {
                title: this.state.foundNote.title,
                tags: this.state.foundNote.tags,
                textBody: this.state.foundNote.textBody
            }})
    }

    render() {
        
        if(this.props.notes.length > 0) {
            console.log('foundNote on Edit', this.state.foundNote)
        return (
            <div className="editNote">
                <h2 className="editNoteTitle">Edit Note:</h2>
                <form className="editForm" onSubmit={(event) => {event.preventDefault(); this.props.submitEdit(this.state.foundNote._id, this.state.tags, this.state.title, this.state.textBody)}} >
                    <input type="text" name="title" className="createFormTitleInput" placeholder={this.state.foundNote.title} value={this.state.title} onChange={this.changeHandler} />
                    <input type="text" name="tags" className="createFormTitleInput" placeholder={this.state.foundNote.tags} value={this.state.tags} onChange={this.changeHandler} />
                    <textarea type="text" name="textBody" className="createFormTextInput" placeholder={this.state.foundNote.textBody} value={this.state.textBody} onChange={this.changeHandler} />
                    <button className="button saveButton" type="submit">Save</button>
                </form>
            </div>
        )
    } else return (<div>Loading...</div>)
    }
}

export default EditNote;