import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const URL = 'http://localhost:5000/notes/';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: ''
            
         }
    }

    componentDidMount() {
        
        let id = Number(this.props.match.params.id);
        axios.get(URL)
            .then(response => {
                let matching = response.data.find(note => note.id === id);
                this.setState({
                    title: matching.title,
                    content: matching.content,
                    id: matching.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return ( 
            <div className="note-view">
                <div className="buttons">
                <Link to={`/notes/${this.state.id}`}> Edit </Link>
                <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
                </div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
         );
    }
}
 
export default NoteView;