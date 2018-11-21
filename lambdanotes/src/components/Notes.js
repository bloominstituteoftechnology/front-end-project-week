import React, { Component } from 'react';
import Note from './Note';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';



class Notes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
             <Wrapper>
                <h2>Your Notes:</h2>
                <Container>
                    {this.props.notes.map( (note,index) => <Note note={note} key={index} />)} 
                </Container>
               </Wrapper> 
            </>
        );
    }
}

export default Notes;
