import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import {getNotes} from "../actions";
import {FlexRow} from "./Styles/Components";
import Note from "./Note";
import CreateNote from "./CreateNote";
import NoteView from "./ViewNote";
import NoteEdit from "./EditNote";
import {Modal} from "./Styles/Components";

const Container = styled(FlexRow)`
    color: #8C8C8C;
    background: #333333;
    overflow: auto;
    padding: 50px;
    box-sizing: border-box;
`;

class Notes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const {loading, error, notes} = this.props;

        return (
            <Container width="100%" height="200px" grow wrap justifyCenter alignCenter>
                {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                {error && <><h1>Error</h1><p>{error}</p></>}
                {!error && !!notes.length && notes.map(note => {
                    return <Link key={note._id} to={`/note/${note._id}`}><Note note={note}/></Link>
                })}

                <Route path="/note/:id" render={({match}) => <NoteView id={match.params.id}/>}/>
                <Route path="/create/" render={() => <CreateNote/>}/>
                <Route path="/edit/:id" render={({match}) => <NoteEdit id={match.params.id}/>}/>
            </Container>
        );
    }
}

Notes.propTypes = {};

const mapStateToProps = ({loading, error, notes}) => {
    return {
        loading,
        error,
        notes
    }
};

export default connect(mapStateToProps, {getNotes})(Notes);
