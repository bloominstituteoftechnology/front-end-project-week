import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const URL = 'https://raw.githubusercontent.com/DasGMA/front-end-project-week/master/lambda-notes/src/components/notes.json';

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
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <Link to={`/notes/${this.state.id}`}><button> Edit </button></Link>
                <Link to={'/notes'}><button onClick={this.delete}> Delete </button></Link>
                
            </div>
         );
    }
}
 
export default NoteView;