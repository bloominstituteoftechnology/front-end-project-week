import React, { Component } from 'react';
import Note from './Note.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = styled.div`
    margin-top: 50px;
    width: 80%;
`

const NotesView = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ViewTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-left: 23px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`

const StyledInput = styled.input`
margin: 0 auto;
`

class NotesList extends Component   {
    constructor(props)  {
        super(props);
        this.state = {
            notes: [],
            inputValue: "",
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState((state)   =>  ({
            notes: newProps.notes,
        }))
    }

    onInputChange = ({ target })  =>  {
        this.setState((state)   =>  ({
            notes: this.props.notes.filter((note)   =>  {
                return note.title.includes(target.value) || note.textBody.includes(target.value)
            }),
            inputValue: target.value
        }))
    }

    render()    {
        return(
            <ListView>
                <ViewTitle>
                    Your Notes:
                </ViewTitle>
                <StyledInput onChange={this.onInputChange} placeholder={"Search..."} value={this.state.inputValue}></StyledInput>
                <NotesView>
                    {this.state.notes.map((note, index)  =>  {
                        return <StyledLink to={`/note/${note["_id"]}`} data={note} key={index}><Note key={index} note={note}/></StyledLink>
                    })}
                </NotesView>
            </ListView>
        );
    }
}

export default NotesList;
