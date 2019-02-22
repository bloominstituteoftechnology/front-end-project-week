import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNotes, editNote } from "../actions";
import { FlexRow } from "./Styles/Components";
import Note from "./Note";
import CreateNote from "./CreateNote";
import NoteView from "./ViewNote";
import NoteEdit from "./EditNote";
import { Modal, Margin } from "./Styles/Components";
import { InvertedColor } from "./Styles/Colors";
import InfiniteScroll from 'react-infinite-scroller';

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

        this.state = {
            notes: null,
            dragStart: null,
            dragEnd: null,
            dragEl: null
        };
    }

    componentDidMount() {
        this.props.getNotes();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ notes: nextProps.notes });
    }

    handleDragOver = (e, i) => {
        e.target.style.width = "450px";
        this.setState({ dragEnd: i });
    };

    handleDragLeave = (e) => {
        let target = e.target;

        setTimeout(() => {
            target.style.width = "40px";
        }, 250);
    };

    handleDragDrop = () => {
        let { notes, dragEnd, dragStart, dragEl } = this.state;
        if (dragStart > dragEnd) {
            dragEnd = dragEnd + 1;
        }

        notes.splice(dragStart, 1);
        notes.splice(dragEnd, 0, dragEl);
        this.setState({ notes });
    };

    loadMore = () => {
        console.log('loading more');
    };

    render() {
        const { loading, error } = this.props;
        const { notes } = this.state;

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={true || false}
                loader={<div>Loading ...</div>}
            >
                <Container width="100%" height="200px" grow wrap justifyCenter>
                    {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                    {error && <><h1>Error</h1><p>{error}</p></>}

                    {!error && notes && !!notes.length && notes.map((note, i) => {
                        return (
                            <FlexRow key={note.id}>
                                <Link to={`/note/${note.id}`}>
                                    <Note note={note}
                                          handleDragStart={() => this.setState({ dragStart: i, dragEl: note })}
                                          handleDragDrop={this.handleDragDrop}/>
                                </Link>

                                <Margin height="350px" width="40px" onDragOver={e => this.handleDragOver(e, i)}
                                        onDragLeave={e => this.handleDragLeave(e)}/>
                            </FlexRow>
                        );

                    })}


                    <Route path="/note/:id" render={({ match }) => <NoteView id={match.params.id}/>}/>
                    <Route path="/create/" render={() => <CreateNote/>}/>
                    <Route path="/edit/:id" render={({ match }) => <NoteEdit id={match.params.id}/>}/>
                </Container>
            </InfiniteScroll>
        );
    }
}

Notes.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            textBody: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.string)
        }))
};

const mapStateToProps = ({ loading, error, notes }) => {
    return {
        loading,
        error,
        notes
    };
};

export default connect(mapStateToProps, { getNotes, editNote })(Notes);
