import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

const NoteDisplay = (props) => {
    // console.log('props', props)
    return (
        <div className='note_container'>
            {props.data.map(peep =>
                <div key={peep.id} className='note_container-notes'>
                    <h1>{peep.title}</h1>
                    <p>{peep.body}</p>
                </div>)}
        </div>
    )
}

class NoteList extends Component {
    state = {
        notes: []
    }

    theMount() {
        axios
            .get('http://localhost:5000/api/notes')
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }
    componentDidMount() {
        this.theMount();
    }

    render() {
        return (
            <div className='note__container-bg'>
                <h3 className='note__container-h3'>Notes:</h3>
                <NoteDisplay data={this.state.notes} />
            </div>
        );
    }
}

export default NoteList;



