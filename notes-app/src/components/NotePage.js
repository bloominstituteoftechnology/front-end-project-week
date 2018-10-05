import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
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
        .then(response => console.log(response))
    }

    render() {
        return (
            <div className="notepage-div">
                <div className="edit-delete">
                    <Link to="/noteform">
                        <div onClick={() => 
                            console.log('edit clicking')}> edit
                        </div> 
                    </Link>
                    &nbsp;&nbsp;
                    <Link to="/notes">
                        <div onClick={() => {
                            console.log('delete clicking')}}> delete
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