import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import { withRouter } from 'react-router';

import Sidebar from './Sidebar';

import './NoteForms.css';

class NoteUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: this.props.note[0].title,
            content: this.props.note[0].content
        }
    }

    handleInput = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <h1>Edit Note:</h1>
                    <form className="form">
                        <input
                            className="title"
                            type="text"
                            name="title"
                            placeholder="Note Title"
                            onChange={this.handleInput}
                            value={this.state.title}
                        />

                        <textarea
                            className="content"
                            rows="25"
                            type="text"
                            name="content"
                            placeholder="Note Content"
                            onChange={this.handleInput}
                            value={this.state.content}
                        />
                        <button onClick={() => {this.props.updateNote(this.state);
                            this.props.history.push('/');
                        }}>Submit</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.singleFetchedNote
    }
}

export default withRouter(connect(mapStateToProps, { updateNote })(NoteUpdate));