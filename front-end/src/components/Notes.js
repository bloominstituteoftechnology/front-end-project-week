import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from "react-router-dom";
import { connect } from "react-redux";
import { getNotes } from "../actions";
import { FlexColumn } from "./Styled";
import Note from "./Note";
import CreateNoteForm from "./CreateNote";
import NoteView from "./ViewNote";
import NoteEdit from "./EditNote";


class Notes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const { loading, error, notes } = this.props;

        return (
            <FlexColumn>
                {loading && <h1>LOADING...</h1>}
                {error && <><h1>Error</h1><p>{error}</p></>}
                {!error && !!notes.length && notes.map(note => {
                    return <Link key={note._id} to={`/note/${note._id}`}><Note note={note} /></Link>
                })}

                <CreateNoteForm />
                <Route path="/note/:id" render={({match})=> <NoteView id={match.params.id}/>} />
                <Route path="/edit/:id" render={({match})=> <NoteEdit id={match.params.id}/>} />
            </FlexColumn>
        );
    }
}

Notes.propTypes = {};

const mapStateToProps = ({ loading, error, notes }) => {
    return {
        loading,
        error,
        notes
    }
};

export default connect(mapStateToProps, { getNotes })(Notes);
