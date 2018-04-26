import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "../CreateNote/CreateNote.css"
import { connect } from 'react-redux';
import {newNote} from "../../Actions"
class EditNote extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({
            index: this.props.location.state.index,
            mounted: true,
        })
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        console.log(e.target.value, this.state)
        return e.target.value;
      }

    render() {
        return (
            <div>
                {this.state.mounted === false ? (
                    <div>
                        Fetching Note....
                    </div>
                ) : (
                    <div className="body">
                    <SideBar/>
                        <div className = "sideBar_pop create">
                            <h1>Edit Note: </h1>
                            <input 
                            defaultValue={this.props.notes.notes[this.state.index].title}
                            onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                            <textarea 
                            defaultValue={this.props.notes.notes[this.state.index].note}
                            onChange={this.handleInputChange} name="note" cols="99" rows="10" placeholder="Note Content"></textarea>
                            <button onClick={() => this.props.newNote({title: this.state.title, note: this.state.note})}>Save</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state
    }
  }

export default connect(mapStateToProps)(EditNote);