import React, { Component } from 'react';
import Note from './Note';
import Container from './styles/Container';


class Notes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
              <Container>
                  {this.props.notes.map( note => <Note note={note} key={note._id} />)} 
               </Container>
            </>
        );
    }
}

export default Notes;
