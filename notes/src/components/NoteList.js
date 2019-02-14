import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes } from '../actions/noteActions';
import Note from './Note';
import '../App.css';

class NoteList extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getNotes()
    }

    render(){
        return(
            <div className="note-list">
                {this.props.loading ? <h1>Loading</h1> : null}

                {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
                <h1 className="listHeader">Your Notes:</h1>

                {this.props.notes.map(note => <Note note={note} key={note.id} />).reverse()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes:state.notes,
        loading:state.loading,
        error:state.error
    }
}

export default connect(mapStateToProps, { getNotes})(NoteList)