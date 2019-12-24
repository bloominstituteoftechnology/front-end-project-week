import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNote } from '../Actions/index';
import {getNotes} from '../Actions/index';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import { NoteBody, MenuWrap, MenuBtn } from '../Styles/NoteViewStyle';

class NoteView extends Component {
  


 
 componentWillUnmount() {
     this.props.getNotes()
 }
 


 componentWillMount(){
    const id = this.props.match.params.id;
    this.props.getNote(id)
 }


  render() {
        return (
            <NoteBody>
                <MenuWrap>
                <MenuBtn><Link to={`/note/edit/${this.props.note.id}`}
                note={this.props.note} >Edit</ Link></MenuBtn>
                <MenuBtn>{<Link to={DeleteModal}><DeleteModal id={this.props.note.id} /></Link>}</MenuBtn>
                </MenuWrap>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.note}</p>
            </NoteBody>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        note: state.note,
    }
}

export default withRouter(connect( mapStateToProps, { getNote, getNotes })(NoteView))