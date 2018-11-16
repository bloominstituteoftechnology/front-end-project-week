import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    componentDidMount() {
        this.props.notes.map(note => {
            if (this.props.match.params.id === note._id) {
              this.setState({ 
                  title: note.title, 
                  body: note.textBody 
              });
            }
          });
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()

        const id = this.props.match.params.id;

        const note = {
            title: this.state.title,
            textBody: this.state.body
        };

        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
                .then(res => {
                    console.log('success');
                })
                .catch(() => console.log('Error: Note wasn\'t edited'));
     }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
                <input type="text" name="body" value={this.state.body} onChange={this.inputHandler} placeholder="Body"/>
                <button type="submit">Update Note</button>
            </form>
        )
    }
}

export default EditNote;