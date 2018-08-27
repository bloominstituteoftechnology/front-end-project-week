import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, removeNote } from '../actions';
import { Container } from 'reactstrap';
import NoteCard from './NoteCard';
import DeleteModal from './DeleteModal';
import CheckList from './CheckList';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            checklist: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log("id (called in CDM in Note component): ", id)
        this.props.fetchNote(id);
    }

    selectNote = (e) => {
        console.log("Target of selectNote event", e.target)
        this.props.history.push(`/note/${e.target._id}`)
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = async () => {
        const id = this.props.currentNote._id;
        console.log("id from current note: (called in deleteNote on Note component)", id);
        this.props.removeNote(id);
        await this.props.history.push("/")
    }

    handleCheckBox = (values) => {
        values.forEach(value => console.log(value));
    }

    render() { 
      console.log("state (called in render Note component): ", this.state)
      console.log("current note (called in render Note component):", this.props.currentNote)
      return (
        this.props.currentNote.checklist ? (
          <Container fluid={true}> 
            <DeleteModal 
              id={this.props.match.params.id}
              modal={this.state.modal}
              toggle={this.toggleModal}
              deleteNote={this.deleteNote}/>
            <NoteCard 
              note={this.props.currentNote}
              selectNote={this.props.selectNote}/>
            <CheckList 
              checklist={this.props.currentNote.checklist.split(',')}
              id={this.props.match.params.id}/>
          </Container>
        ) : (
          <Container fluid={true}> 
            <DeleteModal 
              id={this.props.match.params.id}
              modal={this.state.modal}
              toggle={this.toggleModal}
              deleteNote={this.deleteNote}/>
            <NoteCard 
              note={this.props.currentNote}
              selectNote={this.props.selectNote}/>
          </Container>
        )
      )
    }
}

const mapStateToProps = (state) => {
  return {
    currentNote: state.currentNote
  }
}
 
export default connect(mapStateToProps, { fetchNote, removeNote })(Note);