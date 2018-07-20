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
            notes: [],
            sorted: false
        };
    }

    componentDidMount() {
        if(this.state.sorted === false) {
            this.props.fetchReq();
            this.setState({notes: this.props.notes, sorted: false}); 
        }
        // this.handleIndex();
    }

    // handleIndex = () => {
    //     const notes = this.props.notes;
    //     let sortedNotes = [];
    //     for(let i = 0; i < notes.length; i++) {
    //         sortedNotes.push(notes[i]);
    //         sortedNotes[i]['index'] = i;
    //     }
    //     // console.log(notes);
    //     console.log(sortedNotes);
    //     this.setNotes(sortedNotes);
    // }

    handleSortUp = () => {
        if(this.state.sorted === false) this.toggleSorted();
        console.log(this.state.sorted);
        const notes = this.state.notes;
        notes.sort((a,b) => a['_id'] < b['_id']);
        console.log(notes); 
        this.setNotes(notes);
    };

    handleSortDown = () => {
        if(this.state.sorted === false) this.toggleSorted();
        console.log(this.state.sorted);
        const notes = this.state.notes;
        notes.sort((a,b) => a['_id'] >= b['_id']);
        console.log(notes);
        this.setNotes(notes);
    };

    handleRedo = () => {
        console.log(this.state.sorted);
        console.log(this.state.notes);
        if(this.state.sorted === true) {
            this.toggleSorted();
            this.props.fetchReq();
            this.setState({notes: this.props.notes, sorted: false});
        }
    }

    toggleSorted = () => {
        this.setState({sorted: !this.state.sorted});
    }

    setNotes = (notes) => {
        this.setState({notes});
    };

    render() {
        // console.log(this.props.notes);
        console.log(this.state.sorted);
        if (!this.props.notes) {
            return <img src={logo} className="App-logo" alt="logo" style={{ margin: "auto", height: "50%" }} />;
        } else {
            return (
                <div className="ListView-container">
                    <div className="ListView-header">
                        <h2>Your Notes:</h2>
                        <i className="fas fa-sort-up" onClick={this.handleSortUp}>id</i>
                        <i className="fas fa-sort-down" onClick={this.handleSortDown}>id</i>
                        <i className="fas fa-redo-alt" onClick={this.handleRedo}></i>
                    </div>
                    {this.state.sorted === false ? 
                        this.props.notes.map((note, index) => {
                            return (
                                <Link to={`/note/${note["_id"]}`}>
                                    <NoteDetails
                                        key={note["_id"]}
                                        index={index}
                                        note={note}
                                    />
                                </Link>
                            );
                        }) :
                        this.state.notes.map((note, index) => {
                            return (
                                <Link to={`/note/${note["_id"]}`}>
                                    <NoteDetails
                                        key={note["_id"]}
                                        index={index}
                                        note={note}
                                    />
                                </Link>
                            )
                        })
                    }
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