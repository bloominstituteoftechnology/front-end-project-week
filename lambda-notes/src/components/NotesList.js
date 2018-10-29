import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import NoteCard from './NoteCard';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
    }

    componentDidMount() {
        axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(response => this.setState({ notes: response.data }))
          .catch(error => console.log(error));
    }

    render() {
        console.log(this.state.id);
        return(
            <div>
                <Link to={'/'}>Home</Link>
                {this.state.notes.map(note => (
                    <div key={note._id}>
                        <NoteCard 
                            note={note}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default NotesList;