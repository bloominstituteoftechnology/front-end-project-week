import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h3>Your Notes:</h3>
                {this.state.notes.map((note, index) => 
                    <Link to={`/Note/${note.id}`}> <Note key={index} data={note} /> </Link>
                )}                   
            </div>
        );
    }
    
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/notes')
            .then(res => {
                console.log('Notes Data:', res.data)
                this.setState({ notes: res.data })
            })
            .catch(err => {
                console.log(err);
                this.props.history.push('/notes');
            })
    };
}

export default List;