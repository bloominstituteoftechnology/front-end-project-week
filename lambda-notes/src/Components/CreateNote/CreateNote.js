import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./CreateNote.css"
import { connect } from 'react-redux';
import {newNote} from "../../Actions"
class CreateNote extends Component {
    constructor() {
        super();
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

      handleKeyPress = (e) => {
        if(e.key == 'Enter' || e.charCode == 13 || e.keyCode == 13){
            this.handleData()
        }
      }

      handleData = () => {
        this.props.newNote({title: this.state.title, note: this.state.note})
      }

    render() {
        return (
            <div className="body">
                <SideBar/>
                <div className = "sideBar_pop create">
                    <h1>Create New Note:</h1>
                    <input onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                    <textarea onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} name="note" cols="99" rows="10" placeholder="Note Content"></textarea>
                    <button onClick={this.handleData}>Save</button>
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
  