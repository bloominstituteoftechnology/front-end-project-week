import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
        };
    }

    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }
    
    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.fetchNote(newProps.match.params.id);
        }
    }

    fetchNote = id => {
        axios
         .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
         .then(response => {
             this.setState(() => ({ note: response.data }));
         })
         .catch(error => {
             console.error(error);
         });
    };

    render() {
        if (!this.state.note) {
            return <div>Loading Note information...</div>;
        }
        return <NoteCard note={this.state.note} />
    }
}

export default Note;