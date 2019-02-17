import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNote } from '../Actions/index';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import { NoteBody, MenuWrap } from '../Styles/NoteViewStyle';

class NoteView extends Component {
    state = {
        note: {},
        path: "Note View",
    }

 componentDidMount() {

    this.getNote(this.props.match.params.id) 
 }
    getNote = (id) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then( res => { this.setState({
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
                <h4>{this.state.note.title}</h4>
                <h4>{this.state.note.textBody}</h4>
            </NoteBody>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        note: state.note,
    }
}

export default withRouter(connect(mapStateToProps, {getNote})(NoteView))