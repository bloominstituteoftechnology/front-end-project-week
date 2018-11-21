import React from 'react';
import {Link} from "react-router-dom";

const Home = (props) => {
  return (
<li className="cardHome bb ">
  <div className="card-body">
    <h1 className="card-title">WELCOME TO LAMBDA NOTES</h1>
    <p className="card-text">Easily view all notes,add new note, edit or delete a selected note</p>
    <div className="btnbox bb">
    <Link to={`/Notes`} ><a href="#" className="btn btnhome btnnote bb4">View Your Notes</a></Link>
    <Link to={`/Note/New`} ><a href="#" className="btn btnhome btnnote bb4">+Create New Note</a></Link>
    </div>
  </div>
</li> );};



export default Home;


/*
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>*/