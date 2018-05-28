import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {newNote} from "../../Actions"
import axios from "axios"


import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    // handleInputChange = e => {
    //     this.setState({[e.target.name]: e.target.value});
    //     return e.target.value;
    //   }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        axios.get('https://noteslambda.herokuapp.com/notes')
        .then(response => {
            this.setState({
                notes: response.data
            })
            console.log(this.state.notes)
        }).catch(err => {
            console.log(err)
        })
    }
    

    render() {
        return (
            <div className = "body">
                <SideBar/>
                <div className = "sideBar_pop notes">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>

                    <div>
                        {this.state.notes.length < 1 ? (
                            <div>Please Make A note</div>
                        ) : (
                            <div className="row">
                            {this.state.notes.map(note => {
                                return(
                                    <Link to="/home" key={note._id} className="card">
                                        <h1 className="underline">{note.title}</h1>
                                        <h4>{note.content}</h4>
                                    </Link>
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
  
