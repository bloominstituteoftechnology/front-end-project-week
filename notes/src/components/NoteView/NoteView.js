import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { deleteNote } from '../../actions';
import { fullNoteView } from '../../actions';
import '../components.css';
import './NoteView.css';

class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            isEditing: false,
            id: null,
        }
    }

    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.id;
        console.log(id);
        this.props.notes.forEach(note => {
            if (Number(id) === note.id) {
                console.log(note.title);
                this.setState({
                    title: note.title,
                    text: note.text,
                    id: note.id,
                });
            }
        });
        console.log(this.state);
    }
    goToViewMode = () => {
        this.props.history.go(-1);
    }
      
    delete = (id) => {
        this.props.deleteNoteAction(id);
        this.goToViewMode();
    }
      
    toggleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }
      
      
    editNote = event => {
        event.preventDefault();
    }

    updateNote = event => {
    
        if (event.target.name === 'title') {
          this.setState({
            title: event.target.value
          })
        } else if (event.target.name === 'text') {
          this.setState({
            text: event.target.value
          })
        }
    }
    render() {
        if (this.state.isEditing) {
            return (
                <div className="appContainer">
                    <div className="container">
                        <div className="sidebarContainer">
                            <h1>Lambda Notes</h1>
                            <Link to={`/`}>
                                <button className="buttons">View Your Notes</button>
                            </Link>
                            <Link to={`/create`}>
                                <button className="buttons">+ Create New Note</button>
                            </Link>
                        </div>
                        <div className="notesSectionContainer">
                            <div className="noteViewTitle">Edit Note</div>
                            <br/>
                            <Form className="form" onSubmit={this.editNote}>
                            <FormGroup>
                                <Input className="titleInput"
                                    name='title'
                                    onChange={this.updateNote}
                                    value={this.state.title}
                                  />
                            </FormGroup>
                            <br/>
                            <FormGroup>
                                <Input className="textInput"
                                    type="textarea"
                                    name='text'
                                    onChange={this.updateNote}
                                    value={this.state.text}
                                />
                            </FormGroup>

                            <br/>
                            <button className='updateButton' type="submit" onClick={this.toggleEdit}>Update note</button>
                            </Form>
                        </div>
                    </div>

                </div>
      )
    } else {
      return (
        <div className="appContainer">
            <div className="container">
                <div className="sidebarContainer">
                <h1>Lambda Notes</h1>
                <Link to={`/`}>
                    <button className="buttons">View Your Notes</button>
                </Link>
                <Link to={`/create`}>
                    <button className="buttons">+ Create New Note</button>
                </Link>
                </div>
                <div className="notesSectionContainer">
                    <div className="editDelete">
                        <div onClick={this.toggleEdit}>Edit</div>
                        <div onClick={() => this.delete(this.state.id)}>Delete</div>
                    </div>

                    <br/>
                    <div className="noteViewTitle">{this.state.title}</div>
                    <br/>
                    <div className="textArea">{this.state.text}</div>
                </div>
            </div>
        </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, { deleteNote, fullNoteView })(NoteView);