import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createNote } from '../actions';

const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-top: 50px;
`

const TitleText = styled.input`
    width: 450px;
    border: solid 1px gray;
    border-radius: 3px;
`

const BodyText = styled.textarea`
    width: 600px;
    margin-top: 25px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    resize: none;
    border: solid 1px gray;
    border-radius: 3px;
`

const Update = styled.div`
    width: 170px;
    height: 35px;
    margin-top: 10px;
    background: DarkTurquoise;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bolder;
    color: white;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`

class NoteCreate extends Component    {
    constructor(props)  {
        super(props)
        this.state = {
            title: "",
            body: "",
            id: this.props.relID,
        }
    }

    onChangeHandler = ({target})    =>  {
        this.setState((state)   =>  ({
            [target.name]: target.value,
        }))
    }

    onClickHandler = () =>  {
        this.props.createNote(this.state.title, this.state.body)
    }
    componentWillReceiveProps() {
        if(this.props.relID !== "")    {
            return this.props.history.push(`/note/${this.props.relID}`);
        }
    }

    render()    {
        return(
            <CreateContainer>
                <TitleText placeholder={"Note Title"} onChange={this.onChangeHandler} name="title" value={this.state.title}/>
                <BodyText placeholder={"Note Content"} onChange={this.onChangeHandler} name="body" value={this.state.body} />
                <Update onClick={this.onClickHandler}>Create</Update>
            </CreateContainer>
        )
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
    { createNote }
)(NoteCreate);
