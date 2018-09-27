import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

class SingleNoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedNote: {
                _id: "",
                title: "",
                textBody: ""
            }
        }
    }

    componentDidMount() {
        const _id = this.props.match.params._id;
        this.props.fetchSingleNote(_id);
    }

    render() {
        console.log(this.props);
        return (
            <div className="page-container">
                <div className="section-container">
                    <Sidebar />

                    <Link to={{ pathname: `/edit/${this.props.note._id}`, state: { note: this.props.note } }}>
                        <a>edit</a>
                    </Link>
                    <a onClick={() => this.props.deleteNote(this.props.note._id)}>Delete Note</a>

                    <h1>{this.props.note.title}</h1>
                    <p>{this.props.note.textBody}</p>
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