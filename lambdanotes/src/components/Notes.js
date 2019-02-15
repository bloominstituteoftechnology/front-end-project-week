import React, { Component } from 'react';
import Note from './Note';
import Container from './styles/Container';
import Wrapper from './styles/Wrapper';
import SearchInput from './styles/SearchInput';
import SortButton from './styles/SortButton';
import FontAwesome from 'react-fontawesome';


class Notes extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            flag: false,
            newSort: false,
            notes: this.props.notes
          
        }
    }

    componentDidMount() {
        this.sortItems(this.props.notes);
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
    Sort = () => {
        this.setState({
            newSort: true
        })
    }
    sortItems = () => {
        // let newNotes = inputNotes;
        console.log(this.props.notes);
        let myNotes = [];
        if(this.state.newSort) {
            for(let i=0; i< this.props.notes.length-1; i++) {
                if(this.props.notes[i].title.toLowerCase() > this.props.notes[i+1].title.toLowerCase()) {
                    let temp = this.props.notes[i+1];
                    this.props.notes[i+1] = this.props.notes[i];
                    this.props.notes[i] = temp;
                    // console.log(this.props.notes[i].title)
                  }
                  myNotes.push(this.props.notes[i]);
                //   console.log('working');
             }
            
         }         
         this.setState({
             notes:myNotes,
            
         })
    }
    render() {
        
        let inputValue = this.state.text.toUpperCase();
        let newNotes = this.props.notes || this.state.notes;
       
        
    //    console.log(newNotes);
        return (
            <>
             <Wrapper>
                <form className="form-element"onSubmit={this.submitHandler} autoComplete="off">
                   <FontAwesome name="search" className="search"/>
                    <SearchInput value={this.state.text}
                                 onChange={this.inputHandler} 
                                 placeholder="Search....."  name="text"
                                 onFocus={this.hideSort}
                                 onBlur={this.showSort}  />
                                                 
                </form>
               
                <SortButton style={{display: this.state.flag ? 'none' : 'block' }} 
                            onMouseOver={this.Sort} onClick={this.sortItems}>Sort</SortButton>  
                <div></div>
                <h2>Your Notes:</h2>
                <Container>
                    {newNotes.map( (note,index) => {
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
