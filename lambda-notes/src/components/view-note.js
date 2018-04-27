import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, setHome, updateNote, handleTags } from '../REDUX/actions';
import { Button, Modal, ModalBody } from 'reactstrap';
import TagsInput from 'react-tagsinput';
import { ShowAt, HideAt } from 'react-with-breakpoints';

class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      tags: [],
      deleteModal: false
    }
  }

  componentDidMount() { 
    const { note } = this.props.location.state.viewNote;
    note.tags.length > 0 ? this.setState({ tags: note.tags }) : null;
    this.props.setHome(false);
  }

  toggleModal = () => { this.setState({ deleteModal: !this.state.deleteModal }) }

  handleNewTag = (tags) => { 
    // const { note } = this.props.location.state.viewNote;
    this.setState({ tags });
    // const taggedNote = { 
    //   title: note.title,
    //   id: note.id,
    //   tags: tags,
    //   content: note.content,
    // };
    // this.props.handleTags(taggedNote);
  }

  handleReduxTags = () => {
    const { note } = this.props.location.state.viewNote;
    const taggedNote = { 
      title: note.title,
      id: note.id,
      tags: this.state.tags,
      content: note.content,
    };
    this.props.handleTags(taggedNote);
  }

  handleDelete = id => {
    this.toggleModal();
    this.props.deleteNote(id);
  }

  render() {
    const { note } = this.props.location.state.viewNote;
    const actual = this.props.notes.filter(n => { return n.id == note.id })
    return (
      <div className="PrimaryContainer__newNote"> 

        <div className="ViewNote__editOptions">
          <Link to={{ pathname: `/edit/${note.id}`, state: { note: note } }} className="ViewNote__editOptions--click">edit</Link>
          <button onClick={() => this.toggleModal()} className="ViewNote__editOptions--button">delete</button>
        </div>
        <h1 className="PrimaryContainer__header">{note.title}</h1>
        <div className="ViewNote__content mb-4">{note.content}</div>

        <HideAt breakpoint="medium" >
          <div className="d-flex justify-content-between tagEditContainer">
            <TagsInput value={this.state.tags} onChange={this.handleNewTag} />
            <Button onClick={() => this.handleReduxTags()} className="Nav__ButtonsContainer--navButton col-2 my-0">Save Tags</Button>
          </div>
        </HideAt>
        <ShowAt breakpoint="medium" >
          <div className="d-flex flex-column">
            <TagsInput value={this.state.tags} onChange={this.handleNewTag} />
            <Button onClick={() => this.handleReduxTags()} className="Nav__ButtonsContainer--navButton col-3 my-3 tagButton">Save Tags</Button>
          </div>
        </ShowAt>

        {this.state.deleteModal ? (
          <Modal isOpen={this.state.deleteModal}>
            <ModalBody className="Modal__header">Are you sure you want to delete this?</ModalBody>
            <div className="Modal__ButtonsContainer">
              <Link to="/home" onClick={() => this.handleDelete(note.id)} className="Modal__button--link">
                <Button color="danger" className="Modal__button--link--reg">Delete</Button>
              </Link>
              <Button color="primary" onClick={() => this.toggleModal()} className="Modal__button--reg">No</Button>
            </div>
          </Modal>
        ) : null}

      </div>
    )
  }
}
const mapStateToProps = state => ({ notes: state.notes });
export default connect(mapStateToProps, { deleteNote, setHome, updateNote, handleTags })(ViewNote);
