import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Link} from "react-router-dom"
import "./NoteView.css"
import axios from "axios";


class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            title: "",
            content: "",
        }
    }

    display = () => {
        this.setState({
            display: !this.state.display
        })
    }

    componentWillMount() {
        const id = this.props.location.state;

        axios.get(`https://noteslambda.herokuapp.com/notes/${id}`)
        .then(response => {
            console.log(response.data);
            this.setState({
                title: response.data.title,
                content: response.data.content
            })
        }).catch(err => {
            console.log(err)
        })
    }

    handleDelete = () => {
        const id = this.props.location.state;

        axios.delete(`https://noteslambda.herokuapp.com/notes/${id}`)
        .then(response => {
            this.props.history.push('/home')
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div>
                {this.state.title.length < 0 ? (
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
                                <button style={red} onClick={() => {
                                    this.handleDelete()
                                }}>Delete
                                </button>
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
                                            pathname: `/edit/${this.props.location.state}`,
                                            state: this.props.location.state
                                        }}>edit</Link>
                                        <button onClick={this.display}>delete</button>
                                    </div>
                                    <h1>{this.state.title}</h1>
                                    <p>{this.state.content}</p>
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

export default NoteView;