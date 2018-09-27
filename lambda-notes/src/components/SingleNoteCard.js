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
        return (
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <div className="buttons">
                        <Link to={{ pathname: `/edit/${this.props.note._id}` }}>
                            <button>edit</button>
                        </Link>
                        {/* <Link to={{ pathname: `/delete/${this.props.note._id}` }} > */}
                            <button onClick={() => this.props.deleteNote(this.props.note._id)}>Delete Note</button>
                        {/* </Link> */}
                    </div>
                    <div className="single-note">
                        <h1>{this.props.note.title}</h1>
                        <p>{this.props.note.textBody}</p>
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