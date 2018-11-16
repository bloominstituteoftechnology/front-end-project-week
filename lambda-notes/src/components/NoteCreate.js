import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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
            id: ""
        }
    }

    onChangeHandler = ({target})    =>  {
        this.setState((state)   =>  ({
            [target.name]: target.value,
        }))
    }

    onClickHandler = () =>  {
        axios.post(`https://fe-notes.herokuapp.com/note/create`, {title: this.state.title, textBody: this.state.body})
        .then((data)  =>  {
            return this.setState({
                id: data.data.success
            },  ()  =>  {
                return this.props.getNotes();
            });
        })
        .then(()    =>  {
            return this.props.history.push(`/note/${this.state.id}`)
        })
        .catch(err  =>  console.log(err))
    }

    render()    {
        return(
            <CreateContainer>
                <TitleText placeholder={"Note Title"} onChange={this.onChangeHandler} name="title" value={this.state.title}/>
                <BodyText placeholder={"Note Content"} onChange={this.onChangeHandler} name="body" value={this.state.body} />
                <Update onClick={this.onClickHandler}>Update</Update>
            </CreateContainer>
        )
    }
}

export default NoteCreate;
