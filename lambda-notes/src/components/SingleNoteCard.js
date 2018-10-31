import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Sidebar from './Sidebar';

import './SingleNoteCard.css';

class SingleNoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedNote: {
                title: "",
                content: ""
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchSingleNote(id);
    }

    render() {
        return (
            this.props.note.length > 0 ? (
                <div className="page-container">
                    <Sidebar />
                    <div className="section-container">
                        <div className="buttons">
                            <Link to={{ pathname: `/edit/${this.props.note[0].id}` }}>
                                edit
                                {/* <NoteUpdate
                                    updateNote={this.props.updateNote}
                                    singleFetchedNote={this.props.singleFetchedNote}
                                /> */}
                            </Link>
                            {/* <Link to={{ pathname: `/delete/${this.props.note.id}` }} > */}
                            <a onClick={() => {this.props.deleteNote(this.props.note[0].id);
                            this.props.history.push('/');}}>delete</a>
                            {/* </Link> */}
                        
                        </div>
                        <div className="single-note">
                            <h1>{this.props.note[0].title}</h1>
                            <p>{this.props.note[0].content}</p>
                        </div>
                    </div>
                </div>
            ) : (
                    <div>Loading...</div>
                )
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.singleFetchedNote
    }
}

export default withRouter(connect(mapStateToProps, {})(SingleNoteCard));