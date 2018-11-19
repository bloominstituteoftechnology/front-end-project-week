import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions/index';
import Note from './Note';
import '../src/index';
import { NotesContainer, StandardDiv } from './StyledComponents';


class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            currentlyDisplayed: []
        }
    }
    componentDidMount(){
        this.props.getNotes();
        this.setState({
            currentlyDisplayed: this.props.notes
        })
    }

    inputHandler = (e) => {
        const {value} = e.target;
        console.log(value);
        let newDisplay = this.props.notes.filter(note => JSON.stringify(note).toLowerCase().includes(value.toLowerCase()));
        this.setState({
            input: value,
            currentlyDisplayed: newDisplay
        })
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    render(){
        console.log(this.state.currentlyDisplayed);
        return(
            <StandardDiv>
                <div>
                    <h1>Your Notes:</h1>
                    <form onSubmit={this.preventDefault}>
                        <input onChange={this.inputHandler} type="text" placeholder="&#x1f50D; Search"></input>
                    </form>
                </div>
                <NotesContainer>
                    {this.state.currentlyDisplayed.map( note => 
                        < Note note={note} key={note._id} id={note._id} text={note.textBody} title={note.title} /> 
                    )}
                </NotesContainer>
            </StandardDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getNotes })(Notes);