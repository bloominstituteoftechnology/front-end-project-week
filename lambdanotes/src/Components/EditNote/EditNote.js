import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
import "../AddNote/AddNote.css";
import { connect } from 'react-redux';
import {newNote} from "../../Actions"


class CreateNote extends Component {
    constructor() {
        super();
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
        return event.target.value;
      }

    render() {
        return (
            <div className="body">
                <SideBar/>
                <div className = "sideBar_pop create">
                    <h1>Edit Note:</h1>
                    <input onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                    <textarea onChange={this.handleInputChange} name="note" cols="99" rows="10" placeholder="Note Content"></textarea>
                    <button onClick={() => this.props.newNote({title: this.state.title, note: this.state.note})}>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
  }

export default connect(mapStateToProps, {
    newNote,
  })(CreateNote);