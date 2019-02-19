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
    const noteId = this.props.match.params.id
    getNote(noteId);
 }



  render() {
      console.log(this.state);
        return (
            <NoteBody>
                <MenuWrap>
                <p><Link to={`/note/edit/${this.state.note.id}`}
                note={this.state.note.id} >Edit</ Link></p>
                <p>{<Link to={DeleteModal}><DeleteModal id={this.state.note.id} /></Link>}</p>
                </MenuWrap>
                <h4>{this.state.note.title}</h4>
                <h4>{this.state.note.note}</h4>
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