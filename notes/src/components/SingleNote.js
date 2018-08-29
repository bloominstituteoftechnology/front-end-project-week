import React, {Component} from "react"
import {Link} from 'react-router-dom'
import {Nav, NavItem, NavLink} from 'reactstrap'


const SingleNote = (props) => {
    const note = props.notes.find((each) => {
      return each._id == props.match.params.id
    })
    console.log("notes", props.match.params.id, props.notes)
    return (
      <div >
        <Nav>
          <NavItem>
            <Link className ='nav' to='/edit'>
                  Edit
            </Link>
          </NavItem>
          <NavItem>
            <Link className ='nav' to ='/'>
                  Delete
            </Link>
          </NavItem>
        </Nav>
      <h1>{note.title}</h1>
      <p>{note.textBody}</p>
      </div>);
    };

    export default SingleNote;
