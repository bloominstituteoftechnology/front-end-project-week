import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import './newNote.css';

const NewNoteContainer = styled.div`
    position:fixed;
    top:1%;
    margin:2% auto;
    width:400px;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:space-around;
    z-index:1000;
`;

const Input = styled.div`
    width:100%;
`;

class NewNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            note: '',
        }
    }

    saveNote = () => {
        this.props.handleNewNote(this.state)
    }

    handleInput = (e) => {
        console.log("what e EES", e.target.name);
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render(){
        console.log(this.state.title);
        return (
        <NewNoteContainer >
                <input className="note-input title" type="text" name="title" placeholder="title" onChange={this.handleInput}/>
            {/* <input type="text" name="note" placeholder="note"/> */}
                <textarea className="note-input note-area" rows="6" cols="33" name="note" placeholder="note" onChange={this.handleInput}></textarea>
                <button onClick={this.saveNote}>
                    <Link to="/">save.</Link>
                </button>
                <button>
                    <Link to="/">cancel.</Link>
                </button>
        </NewNoteContainer>
        )
    }
}

export default NewNote;