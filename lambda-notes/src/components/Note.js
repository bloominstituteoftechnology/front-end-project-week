import React from 'react';
import axios from 'axios';

import NoteCard from './NoteCard';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    componentWillReceiveProps(newProps) {
        if (this.props.match.params._id !== newProps.match.params._id) {
            this.fetchNote(newProps.match.params._id);
        }
    }

    render() {
        if (!this.state.note) {
            return <div>Loading note information...</div>;
        }

        return (
            <div className="save-wrapper">
                <NoteCard note={this.state.note} />
            </div>
        );
    }
}
export default Note;