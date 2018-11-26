import React, { Component } from 'react'
import DeleteModal from './DeleteModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NoteBody, MenuWrap } from '../Styles/NoteViewStyle';

export default class NoteView extends Component {
    state = {
        note: {},
        path: "",
    }


 
    componentDidMount() {

   const id = this.props.match.params.id;
       this.getNote(id)
    }

    getNote = (id) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => { this.setState({
            note: res.data,
            path:"Note View",
        })})
        .catch(res => console.log( res.message ));
        }


  render() {
        return (
            <NoteBody>
                <MenuWrap>
                <p><Link to={`/note/edit/${this.state.note._id}`}
                note={this.state.note._id} >Edit</ Link></p>
                <p>{<Link to={DeleteModal}><DeleteModal id={this.state.note._id} /></Link>}</p>
                </MenuWrap>
                <h3>{this.state.note.title}</h3>
                <p>{this.state.note.textBody}</p>
            </NoteBody>
        )
    }
}
