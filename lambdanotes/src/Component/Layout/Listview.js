import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Notecard from '../Reusables/Notecard';
import Mybutton from '../Reusables/Mybutton';
import Styles from '/Users/samar/Documents/js/lambdaschool/course/front-end-project-week/lambdanotes/src/Styles/Listview.css';
import {Container, Row, Col} from 'reactstrap'

export default class Createview extends Component {
  render() {
    return (
        <div className="BigContainer">
            <div className="sidebar">
                <div className="sidebarname">
                    <h1> Lambda Notes</h1>
                </div>
                <div>
                    <Link to="/note">
                        <Mybutton className="btn" text = "View your notes"/>
                    </Link>
                    <Link to="/create">
                        <Mybutton className="btn" text = "+ Create new notes"/>
                    </Link>
                </div>
            </div>

            <div className="mainbar">
                <div className = "mainbarHeading">
                    <h2>Your Notes: </h2>
                </div>
                <Container>
                  <Row>
                    <Col>
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                          <Notecard />
                    </Col>
                  </Row>
                </Container>
                


            </div>
      </div>
    )
  }
};



// export default class Listview extends Component {
//   render() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col" id = "sidebar">
//                     <h1> Lambda </h1>
//                     <h1> Notes </h1>
//                     <Link to="/note">
//                       <Mybutton text = "View your notes"/>
//                     </Link>
//                     <Link to="/create">
//                       <Mybutton text = "+ Create new notes"/>
//                     </Link>
//             </div>
//             <div className="col-8">
//                     <h2> Your</h2>
//                     <h2> Notes </h2>
//                 <div className="row">
  
//                     <Notecard />
//                     <Notecard />
//                     <Notecard />
//                     <Notecard />
//                     <Notecard />
//                     <Notecard />
//               </div>
//             </div>
            
//         </div>
//       </div>
//     )
//   }
// };
