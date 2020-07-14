import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const URL = 'https://dakine-lambdanotes-api.herokuapp.com/notes';

class Note extends Component {
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
                let match = response.data.find(note => note.id === id);
                this.setState({
                    title: match.title,
                    content: match.content,
                    id: match.id
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    delete = (id) => {
        axios.delete(`${URL}/${this.state.id}`)
        .then(response => {
            this.setState({
                notes: response.data
            })
            window.location = '/notes';
        })
        .catch(error => {
          console.log(error);
        })
    }

    render() {
        return (
        <div>

            <div>
                <h1 className="notetitle">Your Notes:</h1>

            </div>
            <div>
                <Link to={`/editnote/${this.state.id}`}><button className="note-button"> Edit </button></Link>
               <button className="note-button" onClick={this.delete}> Delete </button>
               </div>

            <div className="note-view">
                    <h1 className="notes-title">{this.state.title}</h1>
                     <p className="notes-content">{this.state.content}</p>
            </div>
     </div>
         );
    };

}

export default Note;
