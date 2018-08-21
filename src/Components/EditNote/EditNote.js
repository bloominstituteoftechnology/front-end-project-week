import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
import "../AddNote/AddNote.css";


import {Link} from 'react-router-dom';

import axios from 'axios';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: {
                id: null,
                title: "",
                content: ""
            },
            
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        
        axios
            .get('http://localhost:3300/notes')
            .then((response) => {
                const note = response.data.filter(note => note.id === Number(id)) 
                this.setState({ notes: note[0], id: Number(id)})
            })
            .catch(err => console.log(err));
        }

    updateNote = () => {
        const id = this.state.id;
        axios 
            .put(`http://localhost:3300/notes/${id}`, {
                title: this.state.notes.title,
                content: this.state.notes.content
            })
            .then(response => {
                this.props.history.push('/');
                this.setState({ id: null, notes: {id:null, title:'', content:''}});
                this.props.handleRefresh();
            })
            .catch(err => console.log(err));
    }
    

    // handleInputChange = event => {
    //     this.setState({[event.target.title]: event.target.value});
    //     return event.target.value;
    //   }

    handleContentChange = event => {
        this.setState({notes: {id: this.state.notes.id, title: this.state.notes.title, content: event.target.value }})
    }

    handleTitleChange = event => {
        this.setState({notes: {id: this.state.notes.id, content: this.state.notes.content, title: event.target.value }})
    }

    render() {
        return (
            <div>
            {this.state.mounted === false ? (
                <div>
                    Fetching Note....
                </div>
            ) : (
                <div className="body">
                <SideBar/>
                    <div className = "sideBar_pop create">
                        <h1>Edit Note: </h1>
                        <input 
                        value={this.state.notes.title}
                        onChange={this.handleTitleChange} type="text" placeholder="Note Title" name="title"/>
                        <textarea 
                        value={this.state.notes.content}
                        onChange={this.handleContentChange} name="content" cols="99" rows="10" placeholder="Note Content"></textarea>
                        <Link to="/" style={noDecoration}><button onClick={this.updateNote}>Save</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
}

const noDecoration = {
    textDecoration: 'none'
}



export default EditNote;