import React from 'react';
import axios from 'axios';
import Note from './Note';

class SingleNote extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            note: {}
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        this.fetchNote(id)
    }

    fetchNote = (id) => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => this.setState({ note: response.data }))
        .catch(err => console.log(err))
    }

    render() { 
        return (
            <Note note={this.state.note}/>
        );
    }
}

 
export default SingleNote;