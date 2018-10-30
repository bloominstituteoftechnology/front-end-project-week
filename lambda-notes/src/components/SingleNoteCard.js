import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

import './SingleNoteCard.css';

class SingleNoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedNote: {
                id: "",
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
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <div className="buttons">
                        <Link to={{ pathname: `/edit/${this.props.note.id}` }}>
                            <a>edit</a>
                        </Link>
                        {/* <Link to={{ pathname: `/delete/${this.props.note.id}` }} > */}
                            <a onClick={() => this.props.deleteNote(this.props.note.id)}>delete</a>
                        {/* </Link> */}
                    </div>
                    <div className="single-note">
                        <h1>{this.props.note.title}</h1>
                        <p>{this.props.note.content}</p>
                    </div>
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

export default connect(mapStateToProps, {})(SingleNoteCard);