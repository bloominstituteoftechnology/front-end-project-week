import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

class NoteList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
        }
    }

    componentDidmount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState(() => ({notes: response.data}))
            })
            .catch(error => console.log('error!'))
    }

    render() {
        return (
            <div>
                {this.state.notes.map(note => {
                    return (
                        <Note
                            note={this.state.notes}
                        />
                    )
                })}
            </div>
        )
    }
}

export default NoteList;