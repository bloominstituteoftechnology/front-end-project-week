import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNote } from '../Actions/index';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import { NoteBody, MenuWrap } from '../Styles/NoteViewStyle';

class NoteView extends Component {


 componentDidMount(props) {

    const id = this.props.match.params.id;
    this.props.getNote(id)
 }



  render() {
      console.log("noteView", this.props);
        return (
            <NoteBody>
                <MenuWrap>
                <article><Link to={`/note/edit/${this.props.match.params.id}`}
                note={this.props.match.params.id} >Edit</ Link></article>
                <article>{<Link to={DeleteModal}><DeleteModal id={this.props.note.id} /></Link>}</article>
                </MenuWrap>
                <h4>{this.props.note.title}</h4>
                <h4>{this.props.note.note}</h4>
            </NoteBody>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        note: state.note,
    }
}

export default withRouter(connect(mapStateToProps, { getNote })(NoteView))