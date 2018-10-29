import React from 'react';
import Note from './Note';
import axios from 'axios';

class NotesList extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState({notes: response.data});
            })
            .catch(error => console.log(error));
    }

    render() {
        return <Note notes={this.state.notes}/>
    }
}

export default NotesList;