import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getOneNote, deleteNote } from '../actions/noteActions';


class BigNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            textBody:''
        }
    }

    componentDidMount(){
        this.props.getOneNote()
        const { notes, match } = this.props
        const BigNote = notes.find(item => `${item._id}` === match.params.id)
        this.setState(BigNote)
    }

    render(){
       
        const clickHandler = () => {
            deleteNote(BigNote._id)
        }
       return(
            <div className="bigNote">
                <div>
                <Link to={`/update/${BigNote._id}`}>edit</Link>
                <button onClick={clickHandler}>Delete</button>
                </div>
                <h1>{BigNote.title}</h1>
                <p>{BigNote.textBody}</p>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notes:state.notes
    }
}

export default connect(mapStateToProps, {getOneNote, deleteNote})(BigNote)