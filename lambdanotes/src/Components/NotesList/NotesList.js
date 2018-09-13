import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
  //Since the newly created note is showing last in the notesarray, this has it show first by reversing the order
    componentWillMount() {
        let reversed = Array.from(this.props.notesArray).reverse();
        this.setState({ notesArray: reversed });
    }
    //note plus note.id are just a really long specific string
    showNotes = (note, index) => {
        return (
            <Link to={`/note/${note._id}`} className='unstyledLink' key={note._id}>  
            <div className='note'>
                <div>
                    <h4>{note.title}</h4>
                    <hr></hr>
                    <p>{note.body}</p>
                </div>
                </div>
            </Link>    
        )
    }

    render() {
        console.log('Props inside NotesList:',this.props)
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notesArray.map(this.showNotes)}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {/*ActionsHere*/})(NotesList);