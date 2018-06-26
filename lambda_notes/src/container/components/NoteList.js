import React, { Component } from 'react';
import Notes from '../func/Notes';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../component.css';




class NoteList extends Component{
    constructor(){
        super()
        this.state = {
            notesList: [],
            note: {},
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/get/')
            .then(response => {
                console.log(response)
                this.setState({ notesList: response.data.note })
            })
            .catch(err => {
                console.log("errorMessage : ", err)
            })
    }
    render(){
    console.log("NoteListProps", this.props)

        console.log(this.props.NoteData);
        return (
            <div className="nL-container" >
                {this.props.NoteData.map((data, index) => <Link to={`/Notes/${data.title}`} key={data.title}  > <Notes class=""  NoteData={data} /> </Link> )} 
            </div>
        )
    }
}

export default NoteList;