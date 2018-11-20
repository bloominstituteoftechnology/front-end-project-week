import React, { Component } from 'react'
import DeleteModal from './DeleteModal';
import axios from 'axios';
import EditView from './EditView';

export default class NoteView extends Component {
    constructor(props){
        super(props)
    this.state = {
        note: {},
    }
    }

 

    componentDidMount() {
    const id = this.props.match.params.id;
       this.getNote(id)
    }

    getNote = (id) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => { this.setState({
            note: res.data
        })})
        .catch(res => console.log( res.message ));
        }


  render() {
        return (
            <div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <EditView/>
                <DeleteModal id={this.state.note._id} />
            </div>
        )
    }
}
