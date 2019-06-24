import React from 'react';
import addNote from '../../actions/actions';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";


//const Create = (props) => {
class Create extends React.Component {
    // constructor() {
    //     super() ;
        state = {
            title: '',
            textBody: ''
        }
    //}
    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    saveNote = (props) => {
        const input = {
            tags: [],
            _id: this.props.notes.length +1,
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.addNote(input)
        this.setState({ title: '', textBody: '' })
        this.props.history.push('/');
    }
    render(){
        return (
            //<div className="form">
            <React.Fragment>
            <h2 className="page-title">Create New Note:</h2>

                <form className="form">
                    <input 
                        className="form-input-title" 
                        type="text"
                        placeholder="Note Title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        name="title"
                    />
                    <input 
                        className="form-input-body"
                        type="text"
                        placeholder="Note Content"
                        onChange={this.handleInputChange}
                        value={this.state.textBody}
                        name="textBody"
                    />
                    <button 
                        className="button-form"
                        type="button"
                        value={this.state.title}
                        onClick={() => this.saveNote()}
                    >
                    Save</button>
                </form>
                </React.Fragment>

        )
    }
};
//export default Create;
const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps, {addNote})(Create);

