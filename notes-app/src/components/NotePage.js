import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            notes: [1],
            notes2: [2],
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
            this.setState({
                ...this.state.note,
                note: {
                    id: response.data._id,
                    title: response.data.title,
                    textBody: response.data.textBody
                }
            })
            console.log(this.state)
        })
    }

    // getRequestById = (id) => {
    //     axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    //     .then(response => {
    //         console.log(response)
    //         let note = Object.assign({id: response._id, title: response.title, textBody: response.textBody}, this.state.jasper);
    //         this.setState({ note: note })
    //         console.log(this.state.note)
    //     })
    // }

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