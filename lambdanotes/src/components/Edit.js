import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions';
import Editview from './Editview';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textbody: ''
            
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    
    updateNote = e => {
        e.preventDefault();
        let updatedNote = {
            id: this.props.match.params.id,
            title: this.state.title,
            textbody: this.state.textbody
        }
        this.props.updateNote(updatedNote);
        this.props.history.push("/")
        window.location.reload();
    }
    
    render() {
        return(
           <Editview 
           updateNote={this.updateNote} 
           handleChange={this.handleChange} 
           title={this.state.title} 
           textbody={this.state.textbody}
           /> 
        )
    }
}
const mapStateToProps = state => {
    return {
      note: state.note,
    }
  }

export default (connect(mapStateToProps, { updateNote })(Edit));