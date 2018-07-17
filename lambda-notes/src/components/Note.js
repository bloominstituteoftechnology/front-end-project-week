import React, { Component } from 'react';
import axios from 'axios';
import NoteView from './NoteView';
import logo from '../logo.svg';

const URL = 'https://killer-notes.herokuapp.com/note/get';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        };
    }

    componentDidMount() {
        const id = this.props.location.pathname.split("/").pop();
        console.log(id);
        this.fetchNote(id);
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if(this.props.location.pathname.split("/").pop() !== newProps.location.pathname.split("/").pop()) {
            this.fetchNote(newProps.location.pathname.split("/").pop());
        }
    }

    fetchNote = (id) => {
        const promise = axios.get(`${URL}/${id}`);
        promise.then(({data}) => {
            console.log(data);
          this.setState(() => ({ note: data }));
        })
        .catch(error => {
          console.error(error);
        });
    };

    render () {
        if(!this.state.note) {
            return <img src={logo} className="App-logo" alt="logo"/>;
        }

        const { title, textBody } = this.state.note;
        return (
            <div className="Note-container">
                <div>edit</div>
                <div>delete</div>
                <NoteView note={this.state.note} />
            </div>
        );
    }
};

export default Note;