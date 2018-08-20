import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
import "../AddNote/AddNote.css";
import { connect } from 'react-redux';
import {updateNote} from "../../Actions"
import {Link} from 'react-router-dom';

import axios from 'axios';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: [],
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // this.setState({
            // index: this.props.location.state.index,
            // mounted: true,
        // })
        axios
            .put(`http://localhost:3300/notes/${id}`)
            .then((response) => {
                this.setState({ notes: response.data, id: Number(id)})
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
        return event.target.value;
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
                        defaultValue={this.state.id}
                        onChange={this.handleInputChange} type="text" placeholder="Note Title" name="title"/>
                        <textarea 
                        defaultValue={this.props.notes.notes[this.state.index].note}
                        onChange={this.handleInputChange} name="note" cols="99" rows="10" placeholder="Note Content"></textarea>
                        <Link to="/" style={noDecoration}><button onClick={() => 
                        this.props.updateNote({title: this.state.title, note: this.state.note}, {index: this.state.index})}>Save</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
}

const noDecoration = {
    textDecoration: 'none'
}

const mapStateToProps = state => {
    return {
        notes: state
    }
  }

export default connect(mapStateToProps, {
    updateNote
})(EditNote);