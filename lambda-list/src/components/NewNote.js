import React from 'react';
import '../App.css';
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../App.css';

// const Button = styled.button`
//   background: #2ac0c4;
//   border-radius: 1px;
//   border: 1px solid gray;
//   color: white;
//   margin: 1 1em;
//   padding: .75em 0em;
//   width: 150px;
//   font-weight: bold;
//   font-size: 14px;
// //   text-shadow: .1px .1px black;

  
 
// `


const NewNote = props => {
    return (
        <div className="page-header">
        {/* This should also change when the page changes */}
            <h3>Your Notes:</h3>
        </div>
    )
}

export default NewNote;



