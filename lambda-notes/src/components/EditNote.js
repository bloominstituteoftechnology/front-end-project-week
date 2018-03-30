// React and Router
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { edit_note } from '../actions';

// Styling
import { Form, Input } from "reactstrap";
import './EditNote.css';

class EditNote extends Component {
    state = {
        Redirect: false,
        id: this.props.match.params.id,
        fields: {
        title: '',
        content: ''
        }
    };

    render() {
        return (
            <div className='editNote'>
            {(this.state.Redirect) ? (<Redirect to='/' />) : ('')}
                <h2 className='my-3 py-3'>Edit Note:</h2>
                <Form className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type="text"
                            name='title'
                            value={this.state.fields.title}
                            onChange={this.handleNewInput}
                            bsSize='lg'
                            className="form-control col-7 my-3 py-3"
                        />
                    </div>
                    <div>
                        <Input placeholder="Note Content"
                            type="textarea"
                            name='content'
                            value={this.state.fields.content}
                            onChange={this.handleNewInput}
                            style={{height: 390}}
                            className="form-control"
                        />
                    </div>
                    <Link to='/' onClick={this.submitEditNote} className='link m-0 mt-3'>Update</Link>
                </Form>
            </div>
        )
    } // end render()

    componentDidMount() {
        // functionality to edit note text
        const id = this.props.match.params.id;
        const notes = this.props.notes;
        const note = notes.find(note => (note.id).toString() === id.toString());
        const fields = {
            title: note.title,
            content: note.content
        };
        this.setState({
            fields: fields, id
        });
    }

    handleNewInput = event => {
        // this.setState({ [event.target.name]: event.target.value });
        const { name, value } = event.target;
        const fields = this.state.fields;
        fields[name] = value;
        this.setState({
            fields
        });
    }

    submitEditNote = event => {
        event.preventDefault();
        if (this.state.fields.title && this.state.fields.content) {
            // const { title, content } = this.state;
            // const EditNotePkg = { title, content };
            this.props.edit_note(this.state.id, this.state.fields);
            this.setState({
                Redirect: true,
                fields: {
                title: '',
                content: ''
                }
            });
        }
    }
} // end EditNote Class

const mapStateToProps = state => {
    return {
      notes: state.notes,
    };
};

export default connect(mapStateToProps, { edit_note })(EditNote);