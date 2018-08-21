import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const URL = 'http://localhost:5000/notes';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: 0
            
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

    delete = (id) => {
        axios.delete(`${URL}/${id}`)
        .then(response => {
            this.setState({
                notes: response.data
            })
        })
        .catch(error => {
          console.log(error);
        })
    }

    render() {
        return ( 
            <div className="note-view">
                <div className="buttons">
                <Link to={`/edit-note/${this.state.id}`}> Edit </Link>
                <Link to={'/notes'} onClick={this.delete}> Delete </Link>
                </div>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
         );
    }
}
 
export default NoteView;