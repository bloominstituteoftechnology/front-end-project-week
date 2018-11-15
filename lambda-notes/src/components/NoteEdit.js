import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-top: 50px;
`

const TitleText = styled.input`
    width: 450px;
`

const BodyText = styled.textarea`
    width: 600px;
    margin-top: 25px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
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
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, {title: this.state.title, textBody: this.state.body})
        .then(( )  =>  {
            return this.props.history.push(`/note/${this.props.match.params.id}`)
        })
        .catch(err  =>  console.log(err))
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

export default NoteEdit;
