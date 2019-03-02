import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
<li className="cardHome bb6  ">
  <div className="card-body">
    <h1 className="card-title">WELCOME TO LAMBDA NOTES</h1>
    <p className="card-text">Easily view all notes,add new note, edit or delete a selected note</p>
    <div className="btnbox bb7">
    <Link to={`/`}  className="btn btnhome btnnote bb4 primary-light">View Your Notes</Link>
    <Link to={`/Note/New`}  className="btn btnhome btnnote bb4 primary-light-green">+Create New Note</Link>
    </div>
  </div>
</li> );};



export default Home;

