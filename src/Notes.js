import React from 'react';
import { connect } from 'react-redux';
import { getNotes, getOneNote } from './actions/index';
import Note from './Note';
import '../src/index';
import { NotesContainer, StandardDiv, SearchContainer } from './StyledComponents';


class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
        }
    }
    componentDidMount(){
        this.props.getNotes();
    }

    inputHandler = (e) => {
        const {value} = e.target;
        this.setState({
            input: value,
        })
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    render(){
        const currentDisplay = this.state.input ? this.props.notes.filter(note => JSON.stringify(note).toLowerCase().includes(this.state.input.toLowerCase())) : this.props.notes
        return(
            <StandardDiv>
                <SearchContainer>
                    <h1>Your Notes:</h1>
                    <form onSubmit={this.preventDefault}>
                        <input onChange={this.inputHandler} type="text" placeholder="&#x1f50D; Search"></input>
                    </form>
                </SearchContainer>
                <NotesContainer>
                    {currentDisplay.map( note => 
                        < Note key={note._id} id={note._id} text={note.textBody} title={note.title} getOneNote={this.props.getOneNote} history={this.props.history}/> 
                    ).reverse()}
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

export default connect(mapStateToProps, { getNotes, getOneNote })(Notes);