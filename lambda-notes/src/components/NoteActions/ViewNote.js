import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const View = styled.div`
width: 76vw;
background: #f2f1f2;

`

const Actions = styled.div`

`

const Button = styled.button`
float: right;
margin-right: 1rem;
margin-top: 1rem;
font-weight: bold;
text-decoration: underline;
border: none;
background: none;
`

const NoteName = styled.h2`
margin-left: 5%;
margin-top: 5%;
font-weight: bold;

`

const NoteText = styled.p`
margin-left: 5%;
margin-top: 5%;
`


class ViewNote extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            id: props.match.params.id,
            note: props.note,
            delete: props.delete
        }
        console.log(this.state.note[this.state.id].noteName)
        console.log(this.state.id)
    }



    render() {
        return (<View>

            <Actions>
            
            <NavLink to="/view/:id/delete" style={{fontWeight: 'bold', color: 'black', marginLeft: '10px', marginRight: '10px'}}><Button>delete</Button></NavLink>
            <NavLink to="/edit" style={{fontWeight: 'bold', color: 'black', marginLeft: '10px', marginRight: '10px'}}><Button>edit</Button></NavLink>
            
            </Actions>

            <NoteName>{this.state.note[this.state.id].noteName}</NoteName>

            <NoteText>{this.state.note[this.state.id].noteText}</NoteText>

        </View>);
    }
}

export default ViewNote;