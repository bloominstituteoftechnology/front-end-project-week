import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {addNote} from '../actions';
import {connect} from 'react-redux';

class CreateNote extends Component {
    state = {
        redirect: false,
        title: '',
        body: '',

    }
    // addNote = note => {
    //     console.log(note);
    //     axios.post("http://localhost:3333/noteslist", note)
    //     .then(response => {console.log(response)})
    //     //   .then(() => this.setState({ redirect: true }))
    //       .catch(error => console.log(error));
    // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleButton = (e) => {
        e.preventDefault();
        console.log('testing');
        this.props.addNote(this.state)
        this.setState({title: '', body:'', id: ''});
        this.props.history.push('/');
    }

    componentDidMount() {
        const {note} = this.state;
        if (note) {
            this.setState({title: note.title, body: note.body, id: note.id})
        }
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return (
            <form className="form" onSubmit={this.handleButton} >
            <input className="form-title" name="title" value={this.state.title} onChange={this.handleChange} />
            <textarea className="form-body" rows="25" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
            <button type="submit" className="submit"   >Create</button>
            
            </form>


        )
    }

}
// const mapStateToProps = (state) => {
//     return {
//         notes: state.notes,
//     }
// }

export default connect(null, { addNote })(CreateNote);