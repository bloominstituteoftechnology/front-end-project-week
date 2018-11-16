import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';

const NoteView = styled.div`
    padding-left: 25px;
    padding-right: 50px;
    width: 80%;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 750px;
    padding-top: 10px;
`

const StyledLink = styled(Link)`
    color: black;
    padding-left: 15px;
    font-weight: bolder;
`

const StyledDelete = styled.div`
    color: black;
    padding-left: 15px;
    font-weight: bolder;
    text-decoration: underline;
    &:hover {
        cursor: pointer;
    }
`

class SingleNote extends Component  {
    constructor(props)  {
        super(props)
        this.state = {
            note: {}
        }
    }

    componentWillReceiveProps(newProps)  {
        newProps.notes.filter((note)  =>  {
            if(this.props.match.params.id === note["_id"])  {
                this.setState({
                    note: note,
                })
            }
        })
    }

    componentDidMount() {
        this.props.notes.filter((note)  =>  {
            if(this.props.match.params.id === note["_id"])  {
                this.setState({
                    note: note,
                })
            }
        })
    }

    onDeleteHandler = ()    =>  {
        this.props.deleteNote(this.props.match.params.id);
    }

    componentWillReceiveProps() {
        this.props.history.push("/")
    }

    render()    {
        return(
            <div>
                <Actions>
                    <StyledLink to={{pathname: `/edit/${this.props.match.params.id}`, state: {title: this.state.note.title, body: this.state.note.textBody}}}>edit</StyledLink>
                    <StyledDelete onClick={this.onDeleteHandler}>delete</StyledDelete>
                </Actions>
                <NoteView>
                    <h2>{this.state.note.title}</h2>
                    <div>{this.state.note.textBody}</div>
                </NoteView>
            </div>
        );
    }
}

const mapStateToProps   =   state   =>  {
    return {
        notes: state.noteReducer.notes,
        fetching: state.noteReducer.fetching,
        error: state.noteReducer.error,
        relID: state.noteReducer.relID,
    }
}

export default connect(
    mapStateToProps,
    { deleteNote }
)(SingleNote);
