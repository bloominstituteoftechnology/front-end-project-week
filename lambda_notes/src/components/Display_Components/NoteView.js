import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNote } from '../Actions/index';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import { NoteBody, MenuWrap } from '../Styles/NoteViewStyle';

class NoteView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
        }
    }
 

 componentWillUpdate(props) {
    const noteId = this.props.match.params.id
    this.props.getNote(noteId);
 }



  render() {
      console.log("noteView", this.props);
        return (
            <NoteBody>
                <MenuWrap>
                <p><Link to={`/note/edit/${this.props.match.params.id}`}
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
        notes: state.notes,
    }
}

export default withRouter(connect(mapStateToProps, { getNote })(NoteView))