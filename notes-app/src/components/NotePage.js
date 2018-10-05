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
    deleteHandler = () => {
        this.props.deleteRequest(this.props.match.params.id);
        this.props.history.push('/');
    }
    toEditNote = () => {
        const id = this.props.match.params.id;
        // this.props.history.push(`/editnote/${id}`)
        console.log('to edit note')
    }
    render() {
        return (
            <div className="notepage-div">
                <div className="edit-delete">
                    <Link to="/noteform">
                        <div onClick={() => this.toEditeNote()}> edit
                        </div> 
                    </Link>
                    &nbsp;&nbsp;
                    <Link to="/notes">
                        <div onClick={() => this.deleteHandler()}> delete
                        </div>
                    </Link>
                </div>   
                <h1 className="notepage-header">{this.state.note.title}</h1>
                <p className="notepage-paragraph">{this.state.note.textBody}</p>
            </div>
        )
    }
}
export default NotePage;