import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "../CreateNote/CreateNote.css"
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateNote} from "../../Actions"
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
                            <Link to="/home" style={noDecoration}><button onClick={() => this.props.updateNote({title: this.state.title, note: this.state.note}, {index: this.state.index})}>Save</button></Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const noDecoration = {
    textDecoration: "none"
}

const mapStateToProps = state => {
    return {
        notes: state
    }
  }

export default connect(mapStateToProps, {
    updateNote
})(EditNote);