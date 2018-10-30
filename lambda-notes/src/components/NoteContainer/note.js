import React, { Component } from 'react';
import axios from 'axios';
import DeleteModal from './deleteModal';
// import NoteCard from './noteCard';



class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
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
                console.log('HOPE', response);
                this.setState(() => ({ note: response.data }))
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteNote = event => {
        event.preventDefault();
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`)
            .then(response => {
                this.props.changeState(response.data)
            })
            .catch(err =>
                console.log(err));

        this.props.history.push('/');
    }

    // componentWillReceiveProps(newProps){
    //     if(this.props.match.param.id !== newProps.match.params.id){
    //         this.fetchNote(newProps.match.params.id);
    //     }
    // }



    render() {
        console.log('NOTES maybe', this.state);
        return (
            <div>
                edit
                <DeleteModal deleteNote = {this.deleteNote}/>
                {this.state.note.title}
                <h2>{this.state.note.textBody}</h2>
            </div>
        )
    }
}

export default Note;