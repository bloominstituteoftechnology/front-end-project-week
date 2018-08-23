// import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";

const Createcont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;
const Createbod = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin-left: 25px;
    
    
   
`;
const Notetitle = styled.input`
margin-top: 25px;
 width: 355px;
 height: 37px;
`;
const Notecontent = styled.input`
margin-top: 10px;
width: 600px;
height: 340px;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
`;
const Button = styled.button`
margin-top: 25px;
color: white;
display: flex;

justify-content: center;
align-items: center;
background-color: #2BC1C4;
width: 185px;
height: 35px;
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: white;
  
`;


// const Edit = props => {
    class Edit extends Component {
        constructor(props) {
            super(props);
            this.state = {
                notes:props.notes,
                note:props.note,
                id: null,
                editNote: props.editNote,
                handleNoteChange:props.handleNoteChange
            }
            
        }
    componentDidMount () {
        const id = this.props.match.params.id;
        this.setState({id:Number(id),notes:this.props.notes})
    }
   
    filterNotes = note => {
        if (note.id===this.state.id) {
            return(
                <div key={note.id}>
                <p>{note.notetitle}</p>
                <p>{note.notebod}</p>
                </div>
            )
        }
    }
    render(){
        const oneNote = this.props.notes.map(this.filterNotes);
        // const id = this.props.match.params.id;
        const edit = this.state.editNote;
        const id = this.props.match.params.id;
    return (
        <Createcont>
            
            <div>Edit Note:</div>
            <Createbod>

                <Notetitle
                    onChange={this.state.handleNoteChange}
                    type="text"
                    name="notetitle"
                    value={this.state.notetitle}

                    placeholder="Note Title"
                />
                <Notecontent
                    onChange={this.state.handleNoteChange}
                    type="text"
                    name="notebod"
                    value={this.state.notebod}

                    placeholder="Note Content"
                />
                <Button
                    onClick={() =>edit(id)} ><StyledLink to="/">
                        Update</StyledLink>
                </Button>

            </Createbod>
        </Createcont>
    )
}}
    ;

export default Edit