// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { edit_note } from '../actions';

// Styling
import { Form, Input } from "reactstrap";
import './EditNote.css';

class EditNote extends Component {
    state = {
        id: 1,
        title: '',
        content: ''
    };

    render() {
        console.log('editNote', this.state);
        return (
            <div className='editNote'>
                <h2 className='my-3 py-3'>Edit Note:</h2>
                <Form className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type="text"
                            name='title'
                            value={this.state.title}
                            onChange={this.handleNewInput}
                            bsSize='lg'
                            className="form-control col-7 my-3 py-3"
                        />
                    </div>
                    <div>
                        <Input placeholder="Note Content"
                            type="textarea"
                            name='content'
                            value={this.state.content}
                            onChange={this.handleNewInput}
                            style={{height: 390}}
                            className="form-control"
                        />
                    </div>
                    <Link to='/' onClick={this.submitEditNote}className='link m-0 mt-3'>Update</Link>
                </Form>
            </div>
        )
    } // end render()

    handleNewInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    submitEditNote = event => {
        const { title, content } = this.state;
        const EditNotePkg = { title, content };
        this.props.edit_note(this.state.id, EditNotePkg);
        this.setState({
            title: '',
            content: ''
        });
    }
} // end EditNote Class

export default connect(null, { edit_note })(EditNote);