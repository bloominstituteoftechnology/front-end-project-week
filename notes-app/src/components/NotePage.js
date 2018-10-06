import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            note: {
                id: '',
                title: '',
                textBody: '',
            }
        }
    }
    componentDidMount() {
        const noteId = this.props.match.params.id;
        this.getRequestById(noteId)
    }
    getRequestById = (id) => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            const note = {
                id: response.data._id,
                title: response.data.title,
                textBody: response.data.textBody
            }
            this.setState({
                ...this.state.note,
                note: note
            })
        })
        .catch(error => console.log(error))
    }
    toEditNotePage = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/editnote/${id}`)
        console.log('to edit note')
    }
    toDeleteModlPage = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/deletenote/${id}`)
    }
    render() {
        return (
            <div className="notepage-div">
                <div className="edit-delete">
                    <div onClick={() => this.toEditNotePage()}>edit</div>
                    &nbsp;&nbsp;
                    <div onClick={() => this.toDeleteModlPage()}>delete</div>
                </div>
                <h1 className="notepage-header">{this.state.note.title}</h1>
                <p className="notepage-paragraph">{this.state.note.textBody}</p>
            </div>
        )
    }
}
export default NotePage;