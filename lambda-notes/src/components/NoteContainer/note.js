import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './noteCard';



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
                this.setState(()=>({ note: response.data }))
            })
            .catch(error => {
                console.log(error);
            });
    };

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
                delete
                {this.state.note.title}
                <h2>{this.state.note.textBody}</h2>
            </div>
        )
    }
}

export default Note;