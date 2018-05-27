import React, { Component } from 'react';
import { Nav, NavItem, NavLink,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };

        this.toggle = this.toggle.bind(this);
      }

      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() {
    return (
        <div>
            <div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div>
            <Nav className="justify-content-end">
                <NavItem>
                      <Link to ="/editNote">edit</Link>
                 </NavItem>
                  <NavItem>
                       <Link to = "/delete">delete</Link>
                   </NavItem>
            </Nav>

            <Button color="danger" onClick={this.toggle}>Delete</Button>
              {this.props.state.noteList.map(note => {
                  if(this.props.match.params.id === note.id.toString()){
                      return (
                          <div key = {note.id}>
                              <h1>{note.title}</h1>
                              <p>{note.noteBody}</p>
                          </div>
                      )
                    }
              })}

          </div>
        </div>
        )
    }
}
export default NoteView;

// import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';
// import { Link } from "react-router-dom";


// const NoteView = (props) => {
//     return (
//         <div>
//             <Nav className="justify-content-end">
//                   <NavItem>
//                       <Link to ="/editNote">edit</Link>
//                   </NavItem>
//                 <NavItem>
//                       <Link to = "/delete">delete</Link>
//                   </NavItem>
//               </Nav>
//               {props.state.noteList.map(note => {
//                   if(props.match.params.id === note.id.toString()){
//                       return (
//                           <div key = {note.id}>
//                               <h1>{note.title}</h1>
//                               <p>{note.noteBody}</p>
//                           </div>
//                       )
//                     }
//               })}

//           </div>
//     )
// }

// export default NoteView;