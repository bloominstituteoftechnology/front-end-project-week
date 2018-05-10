import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Create extends Component {
    state = {
        redirect: false,
        title: '',
        body: '',

    }
    addNote = note => {
        axios.post("http://localhost:3333/noteslist", note)
          .then(() => this.setState({ redirect: true }))
          .catch(error => console.log(error));
      }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = () => {
        //wah?
        this.props.addNote(this.state)
        this.setState({title: '', body:'', id: ''});
    }

    componentDidMount() {
        const {note} = this.state;
        if (note) {
            this.setState({title: note.title, body: note.body, id: note.id})
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="form">
            <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
            <textarea className="form-body" rows="25" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
            <button onClick={() => this.state.handleButton}  ></button>
            
            </div>


        )
    }

}