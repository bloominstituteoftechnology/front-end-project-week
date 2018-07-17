import React, { Component } from 'react';
import NoteView from './NoteView';
import Link from '../../node_modules/react-router-dom/Link';
import axios from 'axios';

const URL = 'https://killer-notes.herokuapp.com/note/get';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            fetching: false,
            fetched: false,
            saving: false,
            saved: false,
            updating: false,
            updated: false,
            deleting: false,
            deleted: false,
            error: null,
            "title": "",
            "textBody": ""
          };
    }

    componentDidMount() {
        const promise = axios.get(`${URL}/all`);
        promise.then(({data}) => {
          // console.log(data);
          this.setState({notes: data});
        })
        .catch((error) => this.setState({error}));
    }

    render() {
        return (
            <div className="ListView-container">
                <div className="ListView-header">
                    <h2>Your Notes:</h2>
                </div>
                {this.state.notes.map((note, index) => {
                    return (
                        <Link to={`/note/${note["\_id"]}`}>
                            <NoteDetails
                                key={note["\_id"]}
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
    const { id, title, textBody } = note;
    return (
        <div className="NoteView-wrapper">
            <NoteView note={note} />
        </div>
    );
};

export default ListView;