import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {newNote} from "../../Actions"


import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
    }

    render() {
        console.log('testing', this.props.notes)
        return (
            <div className = "body">
                <SideBar/>
                <div className = "sideBar_pop notes">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>

                    <div>
                        {this.props.notes.notes.length === 1 ? (
                            <h1>Make a note</h1>
                        ) : (
                            <div className = "row">
                                {this.props.notes.notes.map((note, index) => {
                                    console.log('index',index)
                                return (
                                    <button className="card">
                                        <Link to={{
                                            pathname: `/note/${index}`,
                                            state: {
                                                index: index
                                            }
                                        }}>
                                        <h1 className="underline" key={index}>{note.title}</h1>
                                        <p key={index}>{note.note}</p>
                                        </Link>
                                        {/* <h1 className="underline" key={index}>{note.title} {index}</h1>
                                        <p key={index}>{note.note}</p> */}
                                    </button>
                                )
                            })} 
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('list', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps, {
    newNote,
  })(ListView);
  
