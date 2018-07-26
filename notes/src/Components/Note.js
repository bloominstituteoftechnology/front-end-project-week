import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Notes.css';
class Note extends Component{
constructor(props) {
super(props)
}

    render(){
    return (
        <div className='note'>
            <div className='notetitle'>
            <p>  {this.props.notes.title} </p>
            </div>
            <div className='notecontent'>
            <p>  {this.props.notes.content} </p>
            </div>
            <button className='deletebtn' onClick={
                ()=>{
                this.props.deleteNote(this.props.notes.id)}}> Delete Note </button>
            </div>

    )
}
}
export default Note;
