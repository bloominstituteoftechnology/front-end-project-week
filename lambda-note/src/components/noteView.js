import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

const NoteView = () => {
    return (
        <div>
            <Nav className="justify-content-end">
                  <NavItem>
                      <Link to ="/editNote">edit</Link>
                  </NavItem>
                <NavItem>
                      <Link to = "/delete">delete</Link>
                  </NavItem>
              </Nav>
          </div>
    )
}

export default NoteView;