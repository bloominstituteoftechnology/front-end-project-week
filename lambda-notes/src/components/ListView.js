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
            notes: []
        };
    }

    componentDidMount() {
        this.props.fetchReq();
        this.setState({notes: this.props.notes});
        // this.handleIndex();
    }

    handleIndex = () => {
        const notes = this.props.notes;
        let sortedNotes = [];
        for(let i = 0; i < notes.length; i++) {
            sortedNotes.push(notes[i]);
            sortedNotes[i]['index'] = i;
        }
        // console.log(notes);
        console.log(sortedNotes);
        this.setNotes(sortedNotes);
    }

    handleSortUp = () => {
        console.log(this.state.notes);
    };

    handleSortDown = () => {
        console.log(this.state.notes);
    };

    setNotes = (notes) => {
        this.setState({notes});
    };

    render() {
        // console.log(this.props.notes);
        if (!this.state.notes) {
            return <img src={logo} className="App-logo" alt="logo" style={{ margin: "auto", height: "50%" }} />;
        } else {
            return (
                <div className="ListView-container">
                    <div className="ListView-header">
                        <h2>Your Notes:</h2>
                        <i className="fas fa-sort-up" onClick={this.handleSortUp}></i>
                        <i className="fas fa-sort-down" onClick={this.handleSortDown}></i>
                    </div>
                    {this.state.notes.map((note, index) => {
                        return (
                            <Link to={`/note/${note["_id"]}`}>
                                <NoteDetails
                                    key={note["_id"]}
                                    index={index}
                                    note={note}
                                />
                            </Link>
                        );
                    })}
                </div>
            );
        }
    }
};

function NoteDetails({ note }) {
    return (
        <div className="NoteView-wrapper">
            <NoteView note={note}/>
        </div>
    );
};

const mapStateToProps = ({ notes }) => {
    // console.log(notes);
    return {
        notes: notes.notes
    };
};

export default connect(mapStateToProps, { fetchReq })(ListView);