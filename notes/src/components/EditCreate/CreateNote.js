import React, { Component } from 'react';
import { connect } from 'react-redux';

import { create, edit, getNotes } from '../actions';

//styling
import './EditCreate.css';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createNote = (event, props) => {
        event.preventDefault();
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.create(note)
        this.props.getNotes()
        props.history.push('/notes');
    }

    render() {
        return (
            <div className='notePage'>
                <h3>Create New Note</h3>
                <form className='noteEntry'>
                    <input
                        type='text'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.changeHandler}
                        value={this.state.title}
                    />
                    <textarea
                        rows='25'
                        placeholder='Note Content'
                        name='textBody'
                        onChange={this.changeHandler}
                        value={this.state.textBody}
                    >

                    </textarea>
                    <button onClick={(event) => this.createNote(event, this.props)} className='noteSave'>
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
    }
}

export default connect(mapStateToProps, { create, edit, getNotes })(CreateNote);