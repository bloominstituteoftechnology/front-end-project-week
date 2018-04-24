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
        return (
            <div className = "body">
                <SideBar/>
                <div className = "notes">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>
                    <div className = "row">
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('list', state)
    return {
        title: state.title,
        note: state.note,
        id: state.id
    }
  }

export default connect(mapStateToProps, {
    newNote,
  })(ListView);
  
