import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReq } from '../actions';
import NoteView from './NoteView';
import Link from '../../node_modules/react-router-dom/Link';
import logo from '../logo.svg';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: null
        };
    }

    componentDidMount() {
        this.props.fetchReq();
    }

    render() {
        if(!this.props.notes) return <img src={logo} className="App-logo" alt="logo" style={{margin: "auto", height: "50%"}}/>;

        return (
            <div className="ListView-container">
                <div className="ListView-header">
                    <h2>Your Notes:</h2>
                </div>
                {this.props.notes.map((note, index) => {
                    return (
                        <Link to={`/note/${note["_id"]}`}>
                            <NoteDetails
                                key={note["_id"]}
                                note={note}
                            />
                        </Link>
                    );
                })}
            </div>
        );
    }
};

function NoteDetails({ note }) {
    return (
        <div className="NoteView-wrapper">
            <NoteView note={note} />
        </div>
    );
};

const mapStateToProps = ({ notes }) => {
    // console.log(notes);
    return {
        notes: notes.notes,
        fetched: notes.fetched
    };
};

export default connect(mapStateToProps, { fetchReq })(ListView);