import React, { Component } from 'react';
import axios from 'axios';
import NoteView from './NoteView';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const URL = 'https://killer-notes.herokuapp.com/note/get';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            isSelected: false
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.fetchNote(id);
    }

    // componentWillReceiveProps(newProps) {
    //     console.log(newProps);
    //     if(this.props.location.pathname.split("/").pop() !== newProps.location.pathname.split("/").pop()) {
    //         this.fetchNote(newProps.location.pathname.split("/").pop());
    //     }
    // }

    fetchNote = (id) => {
        const promise = axios.get(`${URL}/${id}`);
        promise.then(({data}) => {
            // console.log(data);
          this.setState(() => ({ note: data, isSelected: !this.state.isSelected }));
        })
        .catch(error => {
          console.error(error);
        });
    };

    render () {
        if(!this.state.note) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

        return (
            <div className="Note-container">
                <div className="Note-header">
                    <div className="Note-links">
                    <Link to={`/edit/${this.state.note["_id"]}`}>
                        <p>edit</p>
                    </Link>
                    <Link to={`/note/${this.state.note["_id"]}`} onClick={this.props.toggleDelete}>
                        <p>delete</p>
                    </Link>
                    </div>
                    <h2>{this.state.note.title}</h2>
                </div>
                <div className="Note-content">
                    <p>{this.state.note.textBody}</p>
                </div>
                {!this.state.isSelected ? <NoteView note={this.state.note}/> : null}
                {this.props.deleting ? <DeleteModal toggleDelete={this.props.toggleDelete} handleDelete={this.props.handleDelete} id={this.state.note["_id"]}/> : null}
            </div>
        );
    }
};

export default Note;