import React, { Component } from 'react';
import '../App.css';
import '../Notes.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';


// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Notes extends Component {
    constructor(props) {
        super();
        this.state = {

        };
    }

    render() {

        return (
            <div className="container">

                <div className="Notes-sidebar">
                    <div className="SideBarTitle" >
                        <h1 className="Notes-bar-item1" >Lambda</h1>
                        <h1 className="Notes-bar-item2" >Notes</h1>

                        <a href="/notes" >
                            <button type="button" className="Notes-button-one">
                                View Your Notes
            </button>
                        </a>
                        <a href="/newnotes" >
                            <button type="button" className="Notes-button-two">
                                + Create New Note
            </button>
                        </a>
                    </div>
                </div>


                <div>
                    <h2 className="NotesViewName">Your Notes:</h2>
                </div>
        
                <div className="Note1">
                    <p ><u>One</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note2">
                    <p><u>Two</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note3">
                    <p><u>Three</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note4">
                    <p><u>Four</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note5">
                    <p><u>Five</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note6">
                    <p><u>Six</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note7">
                    <p><u>Seven</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note8">
                    <p><u>Eight</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
                <div className="Note9">
                    <p><u>Nine</u></p>
                    <p>
                        Morbi pellentesque
                        euismod venetais.
                        Nulla ut nibh nunc.
                        Phasellus diam metus.
                        blandit ac purus a.
                        efficitur mollis
            </p>
                </div>
            </div>
        );
    }
};


export default Notes;