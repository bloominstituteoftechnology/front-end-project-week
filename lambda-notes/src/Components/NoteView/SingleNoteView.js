import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';


const SingleNoteView = (props) => {
    console.log(props);
    return (
        <div className = "note-container">
            <Sidebar/>
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <a href="#" className ="link-button">edit</a>
                        <a href="#" className ="link-button">delete</a>
                    </div>    
                    <h4 className="text-title">
                            I'm a title placeholder
                        </h4>
                        <hr />
                    <p className = "text-body">I'm a paragraph placeholder.
                    
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.adfahpodifhapodifh;dfnadkljnfakldnfvdjknaf;fjandjvmdv .zdjvnaluvha;odfnjvk .mzczv .cm,x vznxcjkvnbuparbgja;kvdf v jfo ahgfapod;fndsmav afh aeghj 
                    </p>
                    <p>adgadfgafdg.</p>
                </div>
            </div>
    );
}


export default SingleNoteView;

