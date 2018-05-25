import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './displayNotes.css';
const URL = 'http://localhost:3333/notes'


class DisplayNotes extends Component {
    constructor(props) {
    super(props);
    this.state = {
        noteArr: [],
        noteObj:{
            },
        notes: []
    }

    };
    componentDidMount(){
        const myPromise = axios.get(URL);
        myPromise
        .then(response => {
            this.setState({ notes: response.data})
        })
        .catch(err => {
            console.error(err);
        });
    }
    render() {
        const noteObj = {
            noteTitle: 'Note Title',
            noteContent: 'Bacon ipsum dolor amet tail alcatra filet mignon pork loin meatloaf. Pork loin kevin beef pork'
        };
        const noteArr = [];
        for(let x = 0; x < 9; x++){
            noteArr.push(noteObj);
        }
    return (
        <body>  
        <div className="container">
            <div className="sideBar">
                <div className="sideBarTitle">
                    <h1 className="sideBarTitle1">Lonnie's</h1>
                    <h1 className="sideBarTitle2">Notes</h1>
                </div>
                <Link to="/">
                <button type="button" className="viewNotesButton">
                View Your Notes
                </button>
                </Link>
                <Link to="/createNote">
                <button type="button" className="createNoteButton">
                + Create New Note
                </button>
                </Link>
        </div>
        <div className="mainBody">
            <h4 className="mainBodyTitle1">Your Notes:</h4>
            <div className="cardContainer">
            {noteArr.map(({noteTitle, noteContent}, i) => (
            <Link to="/viewNote">
            <div className="noteCard" key={i}>
                <h5 className="noteTitle1">{noteTitle}</h5>
                <p className="noteCon">{noteContent}</p>
            </div>
            </Link>
            ))}
        </div>  
        </div>
        </div>
    </body>
)} }    

export default DisplayNotes;



