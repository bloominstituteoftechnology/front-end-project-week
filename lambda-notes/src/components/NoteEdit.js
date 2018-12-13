import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateNote } from '../actions';

const EditContainer = styled.div`
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

class NoteEdit extends Component    {
    constructor(props)  {
        super(props)
        this.state = {
            title: this.props.location.state.title,
            body: this.props.location.state.body
        }
    }

    onChangeHandler = ({target})    =>  {
        this.setState((state)   =>  ({
            [target.name]: target.value,
        }))
    }

    onClickHandler = () =>  {
        // console.log(this.props.match.params.id)
        this.props.updateNote(this.state.title, this.state.body, this.props.match.params.id)
    }

    componentWillReceiveProps() {
        console.log("here")
        if(this.props.relID !== "" || this.props.relID === undefined) {
            console.log(this.props.relID)
            return this.props.history.push(`/note/${this.props.match.params.id}`)
        }
    }

    render()    {
        console.log(this.props)
        return(
            <EditContainer>
                <TitleText onChange={this.onChangeHandler} name="title" value={this.state.title}/>
                <BodyText onChange={this.onChangeHandler} name="body" value={this.state.body} />
                <Update onClick={this.onClickHandler}>Update</Update>
            </EditContainer>
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
    { updateNote }
)(NoteEdit);
