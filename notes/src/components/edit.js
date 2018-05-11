import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editNote} from '../actions'

class Edit extends Component {


  state = {
        redirect: false,
        title: this.props.notes[this.props.match.params.id].title,
        body: this.props.notes[this.props.match.params.id].body,
        id: this.props.match.params.id,
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.editNote(this.state)
        this.setState({title: '', body:'', id: ''});
        this.props.history.push('/');
    }
    
    //this.props.match.params.id

render() {
    return(
        <form className="form" onSubmit={this.handleButton} >
        <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea className="form-body" rows="25" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
        <button type="submit" className="submit"   >Edit</button>
        
        
        </form>


    )
}

}








const mapStateToProps = (state) => {
    console.log(state.notesReducer)
    return {
        notes: state.notesReducer.notes,
    }
}
export default connect(mapStateToProps, {editNote})(Edit)