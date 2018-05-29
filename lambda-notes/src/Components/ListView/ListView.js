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

    componentWillMount() {
        this.fetchData()
    }

    fetchData() {
        const token = localStorage.getItem('token')
        const authtoken = `${token}`;

        const requestOptions = {
            headers: {
                Authorization: authtoken,
            }
        }



        axios.get('https://noteslambda.herokuapp.com/notes', requestOptions)
        .then(response => {
            this.setState({
                notes: response.data
            })
            console.log(this.state.notes)
        }).catch(err => {
            console.log(err)
            this.props.history.push('/')
        })
    }
    

    render() {
        return (
            <div>

            {this.state.notes < 1 ? (
                <div></div>
            ) : (
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
                                            <p>{note.content}</p>
                                        </Link>
                                    )
                                })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}




            </div>
        )
    }
}

export default ListView
  
