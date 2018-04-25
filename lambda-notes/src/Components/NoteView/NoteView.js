import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Route} from 'react-router-dom'
import "./NoteView.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            mounted: false
        }
    }
    componentDidMount() {
        this.setState({
            index: this.props.location.state.index,
            mounted: true

        })
    }

    render() {
        return(
            <div>
                {this.state.mounted === false ? (
                    console.log('false')
                ) : (
                <div className="noteView">
                    <SideBar/>
                    <div className="noteCard">
                        <div className = "links">
                            <Link to="#">edit</Link>
                            <Link to="#">delete</Link>
                        </div>
                        <h1 className="title">{this.props.notes.notes[this.state.index].title}</h1>
                        <p className="note">{this.props.notes.notes[this.state.index].note}</p>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('NoteView', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps)(NoteView);