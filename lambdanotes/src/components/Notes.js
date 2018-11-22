import React, { Component } from 'react';
import Note from './Note';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import SearchInput from './styles/SearchInput';
import SortButton from './styles/SortButton';



class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            flag: false
        }
    }
    inputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    hideSort = () => {
        this.setState({
            flag:true
        })
    }
    showSort = () => {
        this.setState({
            flag:false
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
                <form className="form-element"onSubmit={this.submitHandler} autoComplete="off">
                    <SearchInput value={this.state.text}
                                 onChange={this.inputHandler} 
                                 placeholder="Search....."  name="text"
                                 onFocus={this.hideSort}
                                 onBlur={this.showSort}  />
                </form>
                <SortButton style={{display: this.state.flag ? 'none' : 'block' }}>Sort</SortButton>  
                <div></div>
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
