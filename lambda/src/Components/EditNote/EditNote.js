import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { edit_note } from '../../Actions/index.js';
import { Form, Input } from "reactstrap";

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
                <h2 className='edit'>Edit Note</h2>
                <Form className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type="text"
                            name='title'
                            value={this.state.fields.title}
                            onChange={this.handleNewInput}
                            className="form"
                        />
                    </div>
                    <div>
                        <Input placeholder="Note Content"
                            type="textarea"
                            name='content'
                            value={this.state.fields.content}
                            onChange={this.handleNewInput}
                            className="form"
                        />
                    </div>
                    <Link to='/' onClick={this.submitEditNote} className='link'>Update</Link>
                </Form>
            </div>
        )
    }

    componentDidMount() {
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
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
    };
};

export default connect(mapStateToProps, { edit_note })(EditNote);