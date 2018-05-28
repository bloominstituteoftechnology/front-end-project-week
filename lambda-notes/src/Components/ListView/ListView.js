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
            console.log(response);
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
                        {this.props.notes.notes.length === 1 ? (
                            <h1>Make a note</h1>
                        ) : (
                            <div className = "row">
                                {this.props.notes.notes.map((note, index) => {
                                    console.log('index',index)
                                return (
                                    <Link className="card" to={{
                                        pathname: `/note/${index}`,
                                        state: {
                                            index: index
                                        }
                                    }}>
                                        <h1 className="underline" key={index}>{note.title}</h1>
                                        <p key={index}>{note.note}</p>
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
  
