import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./NoteView.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {deleteNote} from "../../Actions"


class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            mounted: false,
            display: false,
        }
    }

    display = () => {
        this.setState({
            display: !this.state.display
        })
    }

    componentDidMount() {
        this.setState({
            index: this.props.location.state.index,
            mounted: true,
        })
    }

    render() {
        return(
            <div>
                {this.state.mounted === false ? (
                    <div className = "links">
                            <p>Please hold......</p>
                    </div>
                ) : (
                    <div>
                        <div className={this.state.display===false ? (
                            "none"
                        ) : (
                            "modal block"
                        )}>
                            <div className="modalQuestion">Are you sure you want to delete this?
                            </div>
                            <div className="modalButtons">        
                                <Link to="/home"><button style={red} onClick={() => {
                                    this.display();
                                    this.props.deleteNote(this.state.index)
                                }}>Delete</button>
                                </Link>
                                <button onClick={this.display}>No</button>
                            </div>
                        </div>
                    
                        <div className={this.state.display===false ? (
                            "block"
                        ) : (
                            "modalLayover"
                        )}>
                            <div className="noteView">
                                <SideBar/>
                                <div className="sideBar_pop noteCard">
                                    <div className = "links">
                                        <Link to={{
                                            state: {
                                                index: this.state.index
                                            },
                                            pathname: `/edit/${this.state.index}`}}>edit</Link>
                                        <button onClick={this.display}>delete</button>
                                    </div>
                                    <h1 className="title">{this.props.notes.notes[this.state.index].title}</h1>
                                    <p className="note">{this.props.notes.notes[this.state.index].note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}
const red = {
    backgroundColor: "#D0011B",
}
const mapStateToProps = state => {
    console.log('NoteView', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps, {
    deleteNote
})(NoteView);