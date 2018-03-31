import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { newNote } from '../../actions';
import '../components.css';
import '../List/List.css';

class NewNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: '',
            id: null,
        }
    }
    goToViewMode = () => {
        this.props.history.go(-1);
    }
      
    addNewNote = event => {
        event.preventDefault();
        if (this.state.title !== '') {
          this.props.newNote(this.state);
          this.goToViewMode();
        }
    }
    placeNoteToState = event => {
        let newId = this.props.id;
        
        if (event.target.name === 'title') {
          this.setState({
            title: event.target.value
          })
        } else if (event.target.name === 'text') {
          this.setState({
            text: event.target.value,
            id: ++newId,
          })
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="appContainer">
                <div className="container">
                    <div className="sidebarContainer">
                        <h1>Lambda Notes</h1>
                        <Link to={`/`}>
                        <button className="buttons">View Your Notes</button>
                        </Link>
                        <button className="buttons">+ Create New Note</button>
                    </div>

                    <div className="notesSectionContainer">
                        <br />
                        <div className="noteViewTitle">Create New Note</div>
                        <br/>
                        <Form className="form" onSubmit={this.addNewNote}>
                            <FormGroup>
                                <Input className="titleInput"
                                    name='title'
                                    onChange={this.placeNoteToState}
                                    value={this.state.title}
                                />
                            </FormGroup>
                            <br/>
                            <FormGroup>
                                <Input className="textInput"
                                    type="textarea"
                                    name='text'
                                    onChange={this.placeNoteToState}
                                    value={this.state.text}
                                />
                            </FormGroup>
                            <br/>
                            <Link to={`/`}>
                                <button className='updateButton' type="submit" onClick={this.addNewNote}>Create note</button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      id: state.notes[state.notes.length -1].id,
    }
}

export default connect(mapStateToProps, { newNote })(NewNote);