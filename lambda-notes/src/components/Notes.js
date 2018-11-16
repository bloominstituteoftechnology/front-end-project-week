import React, { Component } from 'react';
import axios from 'axios';

import Note from './Note'

class Notes extends Component {
    constructor(){
        super();
        this.state ={
            notes: []
        }
    }

    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState(()=>({notes:response.data}));
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    deleteHandler=(id)=>{
        return()=>{
            axios
                .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
                .then(response =>{
                    console.log(response)
                })
                .catch(err => console.log(err))
        }

    }

    render(){
        return(
            <div className="notesContent">
                <h2>Your Notes:</h2>
                <div className="notesBlock">
                {this.state.notes.map( item => {
                    return(
                        <Note note={item} id={item._id} key={item._id} deleteHandler={this.deleteHandler}/>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Notes