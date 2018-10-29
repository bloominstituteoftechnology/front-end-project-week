import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class FullPageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
             .then(response => {
                this.setState(() => ({ note: response.data }));
             })
             .catch(err => {console.log(err)});
    };

    deleteHandler = id => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
             .then(res => {console.log(res)})
             .catch(err => console.log(err))
      }

    render() {
        if (this.state.note === null) {
            return (
                <div className='container'>
                    Fetching note...
                </div>
            )
        }
        return (
            <div className='container'>
                <h2>{this.state.note.title}</h2>
                <h2>{this.state.note.textBody}</h2>
                <span onClick={() => this.deleteHandler(this.state.note._id)}>X</span>
            </div>
        )
    }
}

export default FullPageNote;