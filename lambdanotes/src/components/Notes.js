import React, { Component } from 'react';
import Note from './Note';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import SearchInput from './styles/SearchInput';



class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        
        this.setState({ text: " "})
    }
    render() {
        
        let inputValue = this.state.text.toUpperCase();
        return (
            <>
             <Wrapper>
                <form onSubmit={this.submitHandler} autoComplete="off">
                    <SearchInput value={this.state.text}
                                 onChange={this.inputHandler} 
                                 placeholder="Search....."  name="text" />
                </form>
                <h2>Your Notes:</h2>
                <Container>
                    {this.props.notes.map( (note,index) => {
                        if(note.title.toUpperCase().includes(inputValue))
                        return(<Note note={note} key={index} />)
                        })} 
                </Container>
               </Wrapper> 
            </>
        );
    }
}

export default Notes;
