import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from './actions/index';
import {withRouter} from 'react-router-dom';

class UpdateNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            note: [],
            title: '',
            textBody: ''
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note, 
            title: note.title,
            textBody: note.textBody
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const updatedNote = {
            title: this.state.title,
            textBody: this.state.textBody,
            id: this.state.note._id
        }
        this.props.updateNote(updatedNote.id, updatedNote);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
        setTimeout(()=>{this.props.history.push(`/notes/${this.state.note._id}`)}, 1000);
    }

    render(){
        return(
            <div>
                <h2>Edit Note:</h2>
            <form onSubmit={this.submitHandler}>
                <input onChange={this.inputHandler} type="text" name="title" placeholder="Note Title" value={this.state.title}></input>
                <input onChange={this.inputHandler} type="text" name="textBody" placeholder="Note Content" value={this.state.textBody}></input>
                <button type="submit">Update</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes 
    }
}

export default withRouter(connect(mapStateToProps, { updateNote })(UpdateNote));
