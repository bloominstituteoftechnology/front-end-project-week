import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import NoteCard from './NoteCard';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
        };
    }

    componentDidMount() {
        console.log('This Props Match Id', this.props.match.params.id); 
        this.fetchNote(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id);
        }
    }

    fetchNote = (id) => {
        axios.get(`http://localhost:5000/api/notes/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(error => { console.log(error) })
    }

    render() {

        if (!this.state.note) {
            return <div>Loading note information...</div> 
        }
        
        console.log('Note', this.state.note)
        return (
            <div className="cont">
                <Navigation />
                <NoteCard note={this.state.note} />
            </div>
        )
    }
}

export default Note; 